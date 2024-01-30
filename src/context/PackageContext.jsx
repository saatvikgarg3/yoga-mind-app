import React, { createContext, useContext, useState } from 'react';

const PackageContext = createContext();

const PackageProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const setPackage = (packageData) => {
    setSelectedPackage(packageData);
  };

  return (
    <PackageContext.Provider value={{ selectedPackage, setPackage }}>
      {children}
    </PackageContext.Provider>
  );
};

const usePackageContext = () => {
  return useContext(PackageContext);
};

export { PackageProvider, usePackageContext };
