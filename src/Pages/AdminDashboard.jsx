import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Components/SectionTitle/SectionTitle';

const STATS = [
  { label: 'Total Orders', value: '1,247' },
  { label: 'Revenue', value: '$128,450' },
  { label: 'Active Products', value: '24' },
  { label: 'New Signups', value: '342' },
];

const AdminDashboard = () => {
  return (
    <div style={{ padding: '96px 0 120px' }}>
      <div className="container-wide">
        <SectionTitle
          eyebrow="ADMIN"
          title="DASHBOARD"
          align="left"
        />

        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'var(--gutter)',
            marginTop: '48px',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              style={{
                padding: '32px',
                border: '1px solid var(--border-light)',
                textAlign: 'center',
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--fs-headline-lg)',
                fontWeight: 'var(--fw-display)',
                color: 'var(--color-green)',
                marginBottom: '8px',
              }}>
                {stat.value}
              </p>
              <p style={{
                fontSize: 'var(--fs-label)',
                fontWeight: 'var(--fw-label)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Orders Table */}
        <motion.div
          style={{ marginTop: '80px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--fs-headline-sm)',
            marginBottom: '24px',
          }}>
            Recent Orders
          </h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Order</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Customer</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Status</th>
                  <th style={{ textAlign: 'right', padding: '12px 16px', fontSize: 'var(--fs-label)', fontWeight: 'var(--fw-label)', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#1042', customer: 'Alex M.', status: 'Shipped', total: '$145.00' },
                  { id: '#1041', customer: 'Jordan K.', status: 'Processing', total: '$210.00' },
                  { id: '#1040', customer: 'Sam T.', status: 'Delivered', total: '$320.00' },
                  { id: '#1039', customer: 'Riley P.', status: 'Delivered', total: '$95.00' },
                  { id: '#1038', customer: 'Taylor W.', status: 'Cancelled', total: '$165.00' },
                ].map((order) => (
                  <tr key={order.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '14px 16px', fontWeight: 600 }}>{order.id}</td>
                    <td style={{ padding: '14px 16px', color: 'var(--text-secondary)' }}>{order.customer}</td>
                    <td style={{ padding: '14px 16px' }}>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: 'var(--fw-label)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        padding: '4px 8px',
                        background:
                          order.status === 'Delivered' ? 'rgba(46,139,87,0.1)' :
                          order.status === 'Shipped' ? 'rgba(0,0,0,0.05)' :
                          order.status === 'Cancelled' ? 'rgba(186,26,26,0.1)' :
                          'rgba(0,0,0,0.03)',
                        color:
                          order.status === 'Delivered' ? 'var(--color-green)' :
                          order.status === 'Cancelled' ? '#ba1a1a' :
                          'var(--text-primary)',
                      }}>
                        {order.status}
                      </span>
                    </td>
                    <td style={{ padding: '14px 16px', textAlign: 'right', fontWeight: 500 }}>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
