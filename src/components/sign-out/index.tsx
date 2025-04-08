"use client";

type Props = {
  onSignOut: () => Promise<void>;
};

const SignOut = ({ onSignOut }: Props) => {
  const handleClick = async () => {
    await onSignOut();
  };

  return <button onClick={handleClick}>Sign Out</button>;
};

export default SignOut;
