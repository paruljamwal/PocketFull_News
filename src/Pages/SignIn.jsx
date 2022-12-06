import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function SignIn() {
  const [err, setError] = useState({});
  const [login, setLogin] = useState({
    email: "",
    password: "",
  }); 
  // getting value from input box...
  const handleData = (e) => {
    //   console.log(e.target.id);
    let { id, value } = e.target;
    setLogin({ ...login, [id]: value });
    setError(loginValidations(login));
  };

  // validations....
  const loginValidations = (val) => {
    const err = {};

    var regexEmail = /\S+@\S+\.\S+/;
    var regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!val.email) {
      err.email = "email is required";
    } else if (!regexEmail.test(val.email)) {
      err.email = "Please enter valid email address!";
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

  //form submission....
  const handelSubmit = (e) => {
    e.preventDefault();
    setError(loginValidations(login));
    console.log(login);
  };






  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <Input type="email" id="email" onChange={handleData} placeholder="Email address" />
            </FormControl>
            <FormControl id="password">
              <Input type="password"  id="password" onChange={handleData} placeholder="Password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'rgb(104,77,175)'}>Forgot password?</Link>
              </Stack>
              <Button
                 onClick={handelSubmit}
                bg={'rgb(104,77,175)'}
                color={'white'}
                _hover={{
                  bg: '#715ba9',
                }}>
                Sign in
              </Button>
              <div id="googleSign"></div>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}