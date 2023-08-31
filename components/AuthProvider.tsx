"use client";

import { useState, useEffect } from "react";
import { getProviders, signIn, signOut } from "next-auth/react";

type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};
type Providers = Record<string, Provider>;

const AuthProvider = () => {
  const [providers, setProviders] = useState<Providers | null>(null);
  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      console.log(providers, "providers")
      setProviders(providers);
    };
    fetchProviders();
  }, []);
  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (
          <button key={i}>{provider.name}</button>
        ))}
      </div>
    );
  }
  return (
    <div>
      <button>gg</button>
    </div>
  );
};

export default AuthProvider;
