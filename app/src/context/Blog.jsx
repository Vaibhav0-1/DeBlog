import { createContext, useContext } from "react";
import * as anchor from '@project-serum/anchor';
import { useAnchorWallet, useConnection, useWallet } from "@solana/wallet-adapter-react";
import { PublicKey,SystemProgram } from "@solana/web3.js";

const BlogContext = createContext();



export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("Parent must be wrapped inside PostsProvider");
  }

  return context;
};

export const BlogProvider = ({ children }) => {


  return (
    <BlogContext.Provider
      value={{

      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
