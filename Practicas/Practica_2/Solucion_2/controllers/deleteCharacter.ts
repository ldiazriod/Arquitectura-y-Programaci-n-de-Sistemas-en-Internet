import { Database } from "https://deno.land/x/mongo@v0.12.1/ts/database.ts";
import {helpers } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { CharacterSchema, } from "../types.ts";
import type { IContext } from "../types.ts";

const deleteCharacter = async (ctx: IContext) => {
    try{
        const db: Database = ctx.StaticRange.db;
        const charactersCollection = db.collection<CharacterSchema>{"Characters"};

        const {id} = helpers.getQuery(ctx, {mergeParams: true});

        const character = await charactersCollection.deleteOne()
    }
}