import { seoData } from '../constants/personal';

const StructuredData = () => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(seoData.structuredData),
      }}
    />
  );
};

export default StructuredData;
