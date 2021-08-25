import Layout from "./Layout/Layout";
export default function Skeleton() {
  return (
    <Layout>
      <div className="skeleton">
        <div className="s-image"></div>
        <div className="s-content"></div>
        <div className="s-content"></div>
        <div className="s-content"></div>

        <style jsx>{`
          .skeleton {
            max-width: 1200px;
            margin: 20px auto;
          }
          .skeleton > div {
            background: #fce2ba;
            border-radius: 4px;
            margin: 20px 0;
          }
          .s-image {
            height: 400px;
            margin-bottom: 20px;
            margin-top: -38px;
          }
          .s-content {
            padding: 8px 0;
            max-width: 1000px;
          }
        `}</style>
      </div>
    </Layout>
  );
}
