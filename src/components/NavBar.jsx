import React from "react";
import {
  Navbar,
  Collapse,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
      );
    }, []);

    // const navList = (
    //     <ul className=" mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    //       <Typography
    //         as="li"
    //         variant="small"
    //         color="blue-gray"
    //         className="p-1 font-normal"
    //       >
    //         <a href="#" className="flex items-center">
    //           Pages
    //         </a>
    //       </Typography>
    //       <Typography
    //         as="li"
    //         variant="small"
    //         color="blue-gray"
    //         className="p-1 font-normal"
    //       >
    //         <a href="#" className="flex items-center">
    //           Account
    //         </a>
    //       </Typography>
    //       <Typography
    //         as="li"
    //         variant="small"
    //         color="blue-gray"
    //         className="p-1 font-normal"
    //       >
    //         <a href="#" className="flex items-center">
    //           Blocks
    //         </a>
    //       </Typography>
    //       <Typography
    //         as="li"
    //         variant="small"
    //         color="blue-gray"
    //         className="p-1 font-normal"
    //       >
    //         <a href="#" className="flex items-center">
    //           Docs
    //         </a>
    //       </Typography>
    //     </ul>
    //   );
  return (
    // <div className="  w-[100%]  ">
    //   <Navbar className="sticky top-0 z-10 h-max rounded-none px-4 py-2 lg:px-8 lg:py-4  text-black border-4 w-full ">
    //     <div className="flex items-center justify-between text-blue-gray-900">
    //       <Typography
    //         as="a"
    //         href="#"
    //         className="mr-4 cursor-pointer py-1.5 font-medium"
    //       >
    //         Material Tailwind
    //       </Typography>
    //       <div className="flex items-center gap-4">
    //         <div className="mr-4 hidden lg:block">{navList}</div>
    //         <div className="flex items-center gap-x-1">
    //           <Button
    //             variant="text"
    //             size="sm"
    //             className="hidden lg:inline-block"
    //           >
    //             <span>Log In</span>
    //           </Button>
    //           <Button
    //             variant="gradient"
    //             size="sm"
    //             className="hidden lg:inline-block text-black"
    //           >
    //             <span>Sign in</span>
    //           </Button>
    //         </div>
    //         <IconButton
    //           variant="text"
    //           className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
    //           ripple={false}
    //           onClick={() => setOpenNav(!openNav)}
    //         >
    //           {openNav ? (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               fill="none"
    //               className="h-6 w-6"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //               strokeWidth={2}
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M6 18L18 6M6 6l12 12"
    //               />
    //             </svg>
    //           ) : (
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-6 w-6"
    //               fill="none"
    //               stroke="currentColor"
    //               strokeWidth={2}
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 d="M4 6h16M4 12h16M4 18h16"
    //               />
    //             </svg>
    //           )}
    //         </IconButton>
    //       </div>
    //     </div>
    //     <Collapse open={openNav}>
    //       {navList}
    //       <div className="flex items-center gap-x-1">
    //         <Button fullWidth variant="text" size="sm" className="">
    //           <span>Log In</span>
    //         </Button>
    //         <Button fullWidth variant="gradient" size="sm" className="">
    //           <span>Sign in</span>
    //         </Button>
    //       </div>
    //     </Collapse>
    //   </Navbar>
    //   <div className="  ">
    //     <Card className="mb-12 w-full">
    //       <img
    //         alt="nature"
    //         className="h-[32rem]  w-full object-cover border-4"
    //         src="/images/donna.jpg"
    //       />
    //     </Card>
    //     {/* <Typography variant="h2" color="blue-gray" className="mb-2">
    //       What is Material Tailwind
    //     </Typography> */}
    //     {/* <Typography color="gray" className="font-normal">
    //       Can you help me out? you will get a lot of free exposure doing this
    //       can my website be in english?. There is too much white space do less
    //       with more, so that will be a conversation piece can you rework to make
    //       the pizza look more delicious other agencies charge much lesser can
    //       you make the blue bluer?. I think we need to start from scratch can my
    //       website be in english?, yet make it sexy i&apos;ll pay you in a week
    //       we don&apos;t need to pay upfront i hope you understand can you make
    //       it stand out more?. Make the font bigger can you help me out? you will
    //       get a lot of free exposure doing this that&apos;s going to be a chunk
    //       of change other agencies charge much lesser. Are you busy this
    //       weekend? I have a new project with a tight deadline that&apos;s going
    //       to be a chunk of change. There are more projects lined up charge extra
    //       the next time.
    //     </Typography> */}
    //   </div>
    // </div>
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nua Barf</span>
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" class="text-white bg-green-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
<img src="/images/portada.jpg" alt="" />
</nav>

  )
}

export default NavBar