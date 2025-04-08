"use client";

type Props = {
  onSignIn: () => Promise<void>;
};

const SignIn = ({ onSignIn }: Props) => {
  const handleClick = async () => {
    await onSignIn();
  };

  return <button onClick={handleClick}>Sign In</button>;
};

export default SignIn;
