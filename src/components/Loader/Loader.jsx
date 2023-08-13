import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <TailSpin
      height="40"
      width="40"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};

export default Loader;
