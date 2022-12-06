import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  Stack,
  Button,
  Text,
  useColorModeValue,
  InputGroup,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as Linkpage, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword , updateProfile} from "firebase/auth";
import { auth } from "../Firebase/firebase";
import { ThemeContext } from "@emotion/react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [err, setError] = useState({});
  const [submitButtonDis, setSubmitButtonDis] = useState(false);
  const navigate = useNavigate()
 
  // fetch values from inputbox
  const [registerData, setRegisterdata] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  //validations...
  const registerValidations = (val) => {
    const err = {};

    var regexEmail = /\S+@\S+\.\S+/;
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!val.email) {
      err.email = "email is required";
    } else if (!regexEmail.test(val.email)) {
      err.email = "Please enter valid email address!";
    }
    if (!val.fullname) {
      err.fullname = "fullname is required";
    } else if (val.fullname.length < 3) {
      err.fullname = "fullname should have atleast 3 characters!";
    } else if (val.fullname.length >= 15) {
      err.fullname = "fullname should have atmax 15 characters!";
    }

    if (!val.password) {
      err.password = "password is required";
    } else if (val.password.length < 6) {
      err.password = "password should have atleast 6 characters!";
    } else if (!regexPassword.test(val.password)) {
      err.password = "password should have strings,numbers,symblys!";
    }

    return err;
  };

  //fetch value from inputbox....
  const handelRegister = (e) => {
    // console.log(e.target.id);
    const { name, value } = e.target;
    setRegisterdata({ ...registerData, [name]: value });
    setError(registerValidations(registerData));
  };

  //onSubmit user data....
  const onSubmitData = () => {
    console.log("safasf");
    console.log(registerData, "reg");
    setError(registerValidations(registerData));
    setSubmitButtonDis(true);
    createUserWithEmailAndPassword(
      auth,
      registerData.email,
      registerData.password
    )
      .then(async(r) => {
        setSubmitButtonDis(false);
        const user = r.user
        await updateProfile(user,{
          displayName:registerData.fullname
        })
        navigate("/signin")
        console.log(user);
      })
      .catch((e) => {
        setSubmitButtonDis(false);
        setError(e.message);
      });
  };

  useEffect(() => {
    // if (Object.keys(err).length === 0) {
    //   // dispatch(RegisterUser(registerData));
    // }
  }, [err]);

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "rgb(104,77,175)")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Box>
              <FormControl id="fullName" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  placeholder="Full Name"
                  name="fullname"
                  type="text"
                  onChange={handelRegister}
                />
                <p>{err.fullname}</p>
              </FormControl>
            </Box>

            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                placeholder="Email Address"
                name="email"
                type="email"
                onChange={handelRegister}
              />
              <p>{err.email}</p>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handelRegister}
                />
                <p>{err.password}</p>
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
        
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"rgb(104,77,175)"}
                color={"white"}
                onClick={onSubmitData}
                disabled={submitButtonDis}
                _hover={{
                  bg: "#6950a7d2",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"} color={"rgb(104,77,175)"}>
                Already a user? <Linkpage to="/signin">Login</Linkpage>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
