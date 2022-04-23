import { useRouter } from "next/router";

const Dyna = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Page number {id}</p>;
};

export default Dyna;
