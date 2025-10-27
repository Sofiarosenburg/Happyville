import Spline from '@splinetool/react-spline';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Spline
        scene="https://prod.spline.design/NNNNw56pa0rAuAmU/scene.splinecode"
        renderOnDemand={true}
      />
    </div>
  );
}
