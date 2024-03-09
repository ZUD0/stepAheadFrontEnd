import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";

export default function SignIn() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* LEFT */}
        <div className="flex-1">
          <div className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Step
            </span>
            Ahead
          </div>
          <p className="text-sm mt-5">
            Introducing a next gen Social media platform which enables user to
            stay up to date and factually correct information
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value=" Your Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
              />
            </div>
            <div>
              <Label value=" Your Password" />
              <TextInput type="password" placeholder="********" id="password" />
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              {/* {loading ? (
                <>
                  <Spinner size="sm" />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )} */}
              Sign In
            </Button>
            {/* <OAuth /> */}
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't have an account ?</span>
            <div className="text-blue-500">Sing Up</div>
          </div>
          {/* {errorMessage != null && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )} */}
        </div>
      </div>
    </div>
  );
}
