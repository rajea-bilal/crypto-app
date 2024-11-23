const page = ({ params }: { params: { coinId: string } }) => {
  return (
    <div className="grid mt-[5rem] justify-center min-h-screen text-4xl font-bold">
      Coin Number: {params.coinId}
    </div>
  );
};

export default page;
