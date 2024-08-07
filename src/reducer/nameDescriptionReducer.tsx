import { NameDescription, NameDescriptionReducer } from "@/types/nameDescription.types";
import { Action } from "redux";

const initialState: NameDescriptionReducer = {
    nameDescriptionArray: []
}

const nameDescriptionReducer = (state = initialState, action: Action) => {
    switch (action.type)
}