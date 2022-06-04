import { NextPage } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

const login: NextPage<Props> = ({ providers }) => {
  return (
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <img src='/spotify-logo.png' alt='logo' className='w-52 mb-5' />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            className='bg-[#18D860] text-white p-5 rounded-full'
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
