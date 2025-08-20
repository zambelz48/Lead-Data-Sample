import React, { useState } from 'react';
import type { Lead } from '../data/leads';
import { getQualityIndicator } from '../data/leads';

interface LeadTableProps {
  leads: Lead[];
}

interface SortableHeaderProps {
  title: string;
  sortKey: keyof Lead;
  currentSort: keyof Lead | null;
  sortDirection: 'asc' | 'desc';
  onSort: (field: keyof Lead) => void;
  width?: string;
  style?: React.CSSProperties;
}

interface IconButtonProps {
  icon: string;
  title: string;
  onClick?: () => void;
  color?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  title,
  onClick,
  color = '#6b7280'
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: '24px',
        height: '24px',
        background: 'none',
        color: color,
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px'
      }}
      title={title}
    >
      {icon}
    </button>
  );
};

const SortableHeader: React.FC<SortableHeaderProps> = ({
  title,
  sortKey,
  currentSort,
  sortDirection,
  onSort,
  width,
  style = {}
}) => {
  const isActive = currentSort === sortKey;

  return (
    <th
      style={{
        textAlign: 'left',
        padding: '12px 16px',
        color: '#ffffff',
        fontWeight: '500',
        borderBottom: '1px solid #3a3d4a',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        userSelect: 'none',
        width,
        ...style
      }}
      onClick={() => onSort(sortKey)}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>{title}</span>
        <span style={{
          marginLeft: '4px',
          color: isActive ? '#3b82f6' : '#6b7280',
          fontSize: '12px',
          opacity: isActive ? 1 : 0.7,
          fontWeight: 'bold',
          fontFamily: 'monospace'
        }}>
          {isActive ? (sortDirection === 'asc' ? '▲' : '▼') : '▲▼'}
        </span>
      </div>
    </th>
  );
};

const LeadTable: React.FC<LeadTableProps> = ({ leads }) => {
  const [sortField, setSortField] = useState<keyof Lead | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleSort = (field: keyof Lead) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedLeads = [...leads].sort((a, b) => {
    if (!sortField) return 0;

    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === 'qualityScore') {
      aValue = a.qualityScore;
      bValue = b.qualityScore;
    }

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const toggleFavorite = (id: string) => {
    console.log('Toggle favorite for lead:', id);
  };

  return (
    <div style={{
      backgroundColor: '#262832',
      borderRadius: '8px',
      overflow: 'hidden',
      border: '1px solid #3a3d4a',
      width: '100%'
    }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '14px'
        }}>
          <thead>
            <tr style={{ backgroundColor: '#262832' }}>
              <th style={{
                textAlign: 'left',
                padding: '12px 16px',
                color: '#ffffff',
                fontWeight: '500',
                borderBottom: '1px solid #3a3d4a',
                width: '48px'
              }}>
                <input
                  type="checkbox"
                  style={{
                    width: '16px',
                    height: '16px',
                    accentColor: '#3b82f6'
                  }}
                />
              </th>
              <SortableHeader
                title="Company"
                sortKey="company"
                currentSort={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <th style={{
                textAlign: 'left',
                padding: '12px 16px',
                color: '#ffffff',
                fontWeight: '500',
                borderBottom: '1px solid #3a3d4a',
                width: '128px'
              }}>
                Actions
              </th>
              <SortableHeader
                title="Lead Quality"
                sortKey="qualityScore"
                currentSort={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
                width="160px"
              />
              <SortableHeader
                title="Industry"
                sortKey="industry"
                currentSort={sortField}
                sortDirection={sortDirection}
                onSort={handleSort}
              />
              <th style={{
                textAlign: 'left',
                padding: '12px 16px',
                color: '#ffffff',
                fontWeight: '500',
                borderBottom: '1px solid #3a3d4a',
                width: '96px'
              }}>
                Links
              </th>
              <th style={{
                textAlign: 'left',
                padding: '12px 16px',
                color: '#ffffff',
                fontWeight: '500',
                borderBottom: '1px solid #3a3d4a'
              }}>
                Product/Service Category
              </th>
              <th style={{
                textAlign: 'left',
                padding: '12px 16px',
                color: '#ffffff',
                fontWeight: '500',
                borderBottom: '1px solid #3a3d4a',
                width: '192px'
              }}>
                Business Type (B2B, B2B2C)
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedLeads.map((lead, index) => {
              const qualityIndicator = getQualityIndicator(lead.leadQuality);
              const getQualityColor = () => {
                switch (lead.leadQuality) {
                  case 'high': return '#10b981';
                  case 'medium': return '#f59e0b';
                  case 'low': return '#ef4444';
                  default: return '#6b7280';
                }
              };

              return (
                <tr
                  key={lead.id}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#262832' : 'rgba(30, 31, 38, 0.5)',
                    borderBottom: '1px solid #3a3d4a'
                  }}
                >
                  <td style={{ padding: '12px 16px' }}>
                    <input
                      type="checkbox"
                      style={{
                        width: '16px',
                        height: '16px',
                        accentColor: '#3b82f6'
                      }}
                    />
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ color: '#ffffff', fontWeight: '500' }}>
                      {lead.company}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <IconButton
                        icon="⭐"
                        title="Toggle favorite"
                        onClick={() => toggleFavorite(lead.id)}
                        color={lead.isFavorite ? '#f59e0b' : '#6b7280'}
                      />
                      <IconButton
                        icon="👁"
                        title="View details"
                        onClick={() => console.log('View details for', lead.id)}
                      />
                      <IconButton
                        icon="✏️"
                        title="Edit lead"
                        onClick={() => console.log('Edit lead', lead.id)}
                      />
                      <IconButton
                        icon="📁"
                        title="Add to folder"
                        onClick={() => console.log('Add to folder', lead.id)}
                      />
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          backgroundColor: getQualityColor()
                        }}
                        title={qualityIndicator.label}
                      ></div>
                      <span style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        color: getQualityColor()
                      }}>
                        {lead.leadQuality.charAt(0).toUpperCase() + lead.leadQuality.slice(1)}
                      </span>
                      <span style={{ fontSize: '12px', color: '#9ca3af' }}>
                        ({lead.qualityScore})
                      </span>
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ color: '#9ca3af' }}>{lead.industry}</span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <IconButton
                        icon="🌐"
                        title="Website"
                        onClick={() => console.log('Open website for', lead.id)}
                      />
                      <IconButton
                        icon="📧"
                        title="LinkedIn"
                        onClick={() => console.log('Open LinkedIn for', lead.id)}
                      />
                      <IconButton
                        icon="📞"
                        title="Phone"
                        onClick={() => console.log('Call', lead.id)}
                      />
                    </div>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ color: '#9ca3af' }}>
                      {lead.productCategory.length > 50
                        ? lead.productCategory.substring(0, 47) + '...'
                        : lead.productCategory
                      }
                      {lead.productCategory.length > 50 && (
                        <button style={{
                          color: '#3b82f6',
                          fontSize: '12px',
                          marginLeft: '4px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          textDecoration: 'underline'
                        }}>
                          Show more
                        </button>
                      )}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ color: '#9ca3af' }}>{lead.businessType}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeadTable;
