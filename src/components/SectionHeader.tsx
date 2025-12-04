interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center mb-12" : "mb-8"}>
      <h2 className={`text-blue-600 mb-3 ${centered ? "mx-auto" : ""}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-600 max-w-3xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
