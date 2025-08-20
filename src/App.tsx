import LeadTable from './components/LeadTable';
import { mockLeads } from './data/leads';

function App() {
  const highQualityLeads = mockLeads.filter(l => l.leadQuality === 'high').length;
  const mediumQualityLeads = mockLeads.filter(l => l.leadQuality === 'medium').length;
  const lowQualityLeads = mockLeads.filter(l => l.leadQuality === 'low').length;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#1e1f26', color: '#ffffff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#ffffff', marginBottom: '8px' }}>
            Companies
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '18px' }}>
            Enhanced lead generation dashboard with quality indicators
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
          marginBottom: '32px'
        }}>
          <div style={{
            backgroundColor: '#262832',
            border: '1px solid #3a3d4a',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div style={{ color: '#9ca3af', fontSize: '14px', fontWeight: '500' }}>Total Companies</div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ffffff', marginTop: '4px' }}>
              {mockLeads.length}
            </div>
          </div>

          <div style={{
            backgroundColor: '#262832',
            border: '1px solid #3a3d4a',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#10b981',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#10b981'
              }}></div>
              High Quality
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981', marginTop: '4px' }}>
              {highQualityLeads}
            </div>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
              {Math.round((highQualityLeads / mockLeads.length) * 100)}% of total
            </div>
          </div>

          <div style={{
            backgroundColor: '#262832',
            border: '1px solid #3a3d4a',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#f59e0b',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#f59e0b'
              }}></div>
              Medium Quality
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#f59e0b', marginTop: '4px' }}>
              {mediumQualityLeads}
            </div>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
              {Math.round((mediumQualityLeads / mockLeads.length) * 100)}% of total
            </div>
          </div>

          <div style={{
            backgroundColor: '#262832',
            border: '1px solid #3a3d4a',
            borderRadius: '8px',
            padding: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: '#ef4444',
              fontSize: '14px',
              fontWeight: '500'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#ef4444'
              }}></div>
              Low Quality
            </div>
            <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#ef4444', marginTop: '4px' }}>
              {lowQualityLeads}
            </div>
            <div style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
              {Math.round((lowQualityLeads / mockLeads.length) * 100)}% of total
            </div>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(to right, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2))',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#ffffff', marginBottom: '4px' }}>
                💡 Smart Lead Prioritization Impact
              </h3>
              <p style={{ color: '#9ca3af' }}>
                Focus on <span style={{ color: '#10b981', fontWeight: '500' }}>{highQualityLeads} high-quality leads</span> and
                skip <span style={{ color: '#ef4444', fontWeight: '500' }}> {lowQualityLeads} low-quality ones</span> to
                save <span style={{ color: '#3b82f6', fontWeight: '500' }}>{Math.round((lowQualityLeads / mockLeads.length) * 100)}% of your Monthly Leads quota</span>
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#10b981' }}>
                ${Math.round((lowQualityLeads / mockLeads.length) * 19 * 12)}
              </div>
              <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                Annual savings (Bronze plan)
              </div>
            </div>
          </div>
        </div>

        <LeadTable leads={mockLeads} />

        <div style={{
          marginTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '14px',
          color: '#9ca3af',
          borderTop: '1px solid #3a3d4a',
          paddingTop: '16px'
        }}>
          <div>
            Showing {mockLeads.length} companies with quality scoring
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981'
              }}></div>
              <span>Recommend enriching ({highQualityLeads})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#f59e0b'
              }}></div>
              <span>Review carefully ({mediumQualityLeads})</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#ef4444'
              }}></div>
              <span>Skip to save quota ({lowQualityLeads})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
