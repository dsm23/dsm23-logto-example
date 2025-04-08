import type { Metadata } from "next";
import { getLogtoContext, signIn, signOut } from "@logto/next/server-actions";
import type { IdTokenClaims } from "@logto/next";
import SignIn from "~/components/sign-in";
import SignOut from "~/components/sign-out";
import { logtoConfig } from "~/utils/logtoConfig";

export const metadata: Metadata = {
  title: "Next.js Enterprise Boilerplate",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    url: "https://next-enterprise.vercel.app/",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://raw.githubusercontent.com/Blazity/next-enterprise/main/.github/assets/project-logo.png",
      },
    ],
  },
};

const Home = async () => {
  const { isAuthenticated, claims } = await getLogtoContext(logtoConfig);

  return (
    <main>
      <h1 className="sr-only">Delete this</h1>
      <nav>
        {isAuthenticated ? (
          <>
            <p>
              Hello, {claims?.sub},
              <SignOut
                onSignOut={async () => {
                  "use server";

                  await signOut(logtoConfig);
                }}
              />
            </p>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(claims as IdTokenClaims).map(([key, value]) => (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{String(value)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p>
            <SignIn
              onSignIn={async () => {
                "use server";

                await signIn(logtoConfig);
              }}
            />
          </p>
        )}
      </nav>
    </main>
  );
};

export default Home;
