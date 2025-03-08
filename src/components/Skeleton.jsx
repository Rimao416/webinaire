import "../styles/Skeleton.css"
const SkeletonLoader = () => (
    <div className="articles">
      {[...Array(5)].map((_, index) => (
        <article key={index} className="article skeleton">
          <div className="skeleton-title"></div>
          <div className="skeleton-description"></div>
          <div className="skeleton-button"></div>
        </article>
      ))}
    </div>
  );

  export default SkeletonLoader