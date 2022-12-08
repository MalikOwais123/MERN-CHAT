import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useLogin } from "../../query/auth/queries";

const Login = () => {
  const {
    mutateAsync: loginUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useLogin();
  const history = useHistory();
  const toast = useToast();
  const [email, setEmail] = useState();
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState();

  const handleClick = () => setShow(!show);

  // ~@ login user on success
  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Login Successful",
        status: "success",
      });
      history.push("/chats");
    }
  }, [isSuccess]);

  // ~@ show error on error
  useEffect(() => {
    if (isError) {
      toast({
        title: "Login Failed",
        description: error,
        status: "error",
      });
    }
  }, [isError]);

  const submitHandler = async () => {
    if (validateFields()) {
      const payload = {
        email,
        password,
      };
      try {
        await loginUser(payload);
      } catch (error) {
        console.log("error :>> ", error);
      }
    }
  };

  const validateFields = () => {
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
      });
      return false;
    }
    return true;
  };

  return (
    <VStack spacing="10px">
      <FormControl id="email" isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          value={email}
          type="email"
          placeholder="Enter Your Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size="md">
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
        </InputGroup>
      </FormControl>
      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={isLoading}
      >
        Login
      </Button>
    </VStack>
  );
};

export default Login;
