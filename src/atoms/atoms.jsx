import { atom } from "recoil";

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const dateState = atom({
  key: "dateState",
  default: "",
});

export const mobileState = atom({
  key: "mobileState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const nameErrorState = atom({
  key: "nameErrorState",
  default: "",
});

export const emailErrorState = atom({
  key: "emailErrorState",
  default: "",
});

export const mobileErrorState = atom({
  key: "mobileErrorState",
  default: "",
});

export const passErrorState = atom({
  key: "passErrorState",
  default: "",
});

export const registeredState = atom({
  key: "registeredState",
  default: false,
  
});

export const createState = atom({
    key: "createState",
    default: true
})

export const matchState = atom({
    key: "matchState",
    default: ""
})

export const tweets = atom({
  key: "tweets",
  default: [],
});

export const recoilImage = atom({
  key: "recoilImage",
  default: [],
});


export const LoginState = atom({
    key: "LoginState",
    default : JSON.parse(localStorage.getItem("userlogin")) || false,
})

export const currentUser = atom({
  key: "currentUser",
  default : JSON.parse(localStorage.getItem("currentUser")) || [],
})

export const AvatarImage = atom({
  key: "AvatarImage",
  default: "",
});

