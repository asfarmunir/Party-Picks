"use client";
//@ts-ignore
import { Veriff } from "@veriff/js-sdk";
import { createVeriffFrame, MESSAGES } from "@veriff/incontext-sdk";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { updateUserStatus } from "@/lib/database/actions/user.action";

interface VeriffConfig {
  apiKey: string;
  parentId: string;
  onSession: (
    err: Error | null,
    response: { verification: { url: string } }
  ) => void;
}

interface KYCVerificationProps {
  userId: string;
}

const KYCVerification = ({ userId }: KYCVerificationProps) => {
  const router = useRouter();

  const startVerification = async () => {
    try {
      const veriff = Veriff({
        apiKey: "56c67943-daff-4bc0-9fd6-168a6c9f296b",
        parentId: "veriff-root",
        onSession: function (
          err: Error | null,
          response: { verification: { url: string } }
        ) {
          if (err) {
            console.error("Veriff session error:", err);
            toast.error("Failed to start verification session");
            return;
          }

          createVeriffFrame({
            url: response.verification.url,
            onEvent: async function (msg: string) {
              switch (msg) {
                case MESSAGES.FINISHED:
                  await handleVerificationSuccess();
                  break;
                case MESSAGES.CANCELED:
                  toast.error("Verification canceled by user");
                  router.push("/");
                  break;
                // @ts-ignore
                case MESSAGES.ERROR:
                  toast.error("Verification error occurred");
                  router.push("/");
                  break;
              }
            },
          });
        },
      } as VeriffConfig);

      veriff.mount({});
    } catch (error) {
      console.error("Veriff initialization error:", error);
      toast.error("Failed to initialize verification");
    }
  };

  const handleVerificationSuccess = async () => {
    try {
      await updateUserStatus(userId);
      toast.success("Verification Successful!", {
        duration: 5000,
        style: {
          backgroundColor: "#10B981", // green-500
          color: "#FFFFFF",
        },
      });
      router.push("/");
    } catch (error) {
      console.error("Failed to update user status:", error);
      toast.error("Verification succeeded but status update failed");
    }
  };

  useEffect(() => {
    startVerification();
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <div className="flex flex-col justify-center my-6 items-center w-full max-w-4xl mx-auto p-6 md:p-8 lg:p-10 rounded-xl border border-orange-400/20 bg-gradient-to-br from-[#16172C] to-[#1E1F34] shadow-lg">
      <div className="w-full text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Identity Verification
        </h1>
        <p className="text-sm text-gray-300">
          Please complete the verification process to access all features
        </p>
      </div>

      <div
        id="veriff-root"
        className="w-full p-6 rounded-lg bg-white border border-orange-400/10"
        style={
          {
            "--veriff-primary": "#F97316", // orange-500
            "--veriff-text": "#FFFFFF",
            "--veriff-background": "#1E1F34",
            "--veriff-border": "#3F3F46",
            "--veriff-error": "#EF4444", // red-500
          } as React.CSSProperties
        }
      >
        {/* Veriff iframe will be injected here */}
      </div>

      <div className="mt-6 text-center text-sm text-gray-400">
        <p>This process usually takes 2-3 minutes</p>
        <p className="mt-1">Powered by Veriff</p>
      </div>
    </div>
  );
};

export default KYCVerification;
