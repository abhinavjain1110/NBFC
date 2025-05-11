const SectionHeader = ({ title, subtitle}) => {
  return (
    <div className={`mb-12 text-center`  }>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg text-gray-600 max-w-10xl mb-4`} >
          {subtitle}
        </p>
      )}
      <div className={`w-20 h-1 mt-4`}></div>
    </div>
  );
};

export default SectionHeader;
