interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color?: string;
}

export function StatCard({ icon, value, label, color = "blue" }: StatCardProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600",
    green: "from-green-500 to-green-600",
    purple: "from-purple-500 to-purple-600",
    orange: "from-orange-500 to-orange-600",
  }[color];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses} flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <div className="text-gray-900 mb-1">{value}</div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}
