import React from "react";

const ViewPackageDownload = ({ count }) => {
  return (
    <article className="package-downloads">
      {count ? (
        <span className="package-count">{count} downloads</span>
      ) : (
        <span></span>
      )}
    </article>
  );
};

export default ViewPackageDownload;
