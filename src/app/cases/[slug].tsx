import { useRouter } from 'next/router';

export default function CasePage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div style={{color: 'white', padding: 40, fontSize: 32}}>
      Página do case: <b>{slug}</b>
    </div>
  );
} 