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
    <div className="pt-24 pb-[120px]">
      <div className="container-wide">
        <SectionTitle
          eyebrow="ADMIN"
          title="DASHBOARD"
          align="left"
        />

        <motion.div
          className="grid grid-cols-4 gap-gutter mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="p-8 border border-border-light text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <p className="font-display text-headline-lg text-brand-green mb-2">
                {stat.value}
              </p>
              <p className="text-label uppercase text-text-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Orders Table */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-display text-headline-sm mb-6">
            Recent Orders
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border-light">
                  <th className="text-left p-3 text-label uppercase text-text-muted">Order</th>
                  <th className="text-left p-3 text-label uppercase text-text-muted">Customer</th>
                  <th className="text-left p-3 text-label uppercase text-text-muted">Status</th>
                  <th className="text-right p-3 text-label uppercase text-text-muted">Total</th>
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
                  <tr key={order.id} className="border-b border-border-light">
                    <td className="p-[14px_16px] font-semibold">{order.id}</td>
                    <td className="p-[14px_16px] text-text-secondary">{order.customer}</td>
                    <td className="p-[14px_16px]">
                      <span
                        className="text-[10px] font-semibold tracking-[0.1em] uppercase px-2 py-1"
                        style={{
                          backgroundColor:
                            order.status === 'Delivered' ? 'rgba(46,139,87,0.1)' :
                            order.status === 'Shipped' ? 'rgba(0,0,0,0.05)' :
                            order.status === 'Cancelled' ? 'rgba(186,26,26,0.1)' :
                            'rgba(0,0,0,0.03)',
                          color:
                            order.status === 'Delivered' ? 'var(--color-green)' :
                            order.status === 'Cancelled' ? '#ba1a1a' :
                            'var(--text-primary)',
                        }}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="p-[14px_16px] text-right font-medium">{order.total}</td>
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
