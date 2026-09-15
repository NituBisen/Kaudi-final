export default function CoinLogo({ size = 34 }) {
  return (
    <img
      src="/assets/coin.png"
      alt="KAUDI"
      width={size}
      height={size}
      className="object-cover block rounded-full"
    />
  );
}
