import dotenv from "dotenv";

import { ApolloClient, InMemoryCache } from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";


dotenv.config();

// const cache = new InMemoryCache({});

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckrme2eua2vww01z17ncc1bpo/master',
  // uri: process.env.REACT_APP_GCMS_URL,
  headers: {
      authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Mjc0ODE5NTksImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2Nrcm1lMmV1YTJ2d3cwMXoxN25jYzFicG8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiODgwMTgwNjItZjhlZC00YzRiLWE1MjYtYzM0ZGQ5OWNlM2VjIiwianRpIjoiY2tybmtxa2lhM3MwZDAxeHNidGMyY3RqMyJ9.k-C_Qu4ytvLAdKvXdtdQZd8sIvZfUoDra6AzYfJPPlc_qdgJun16hRhRn8wDXI4EHjZ9Dqk35H_uP6hIoRAyjVT0fKUIzptdinaiPBOvpe9ZCggCguwbuouKgiVuCDSe8jpvCJ-6NeTB8aTIZYq2xeKOmoOURfvG4D6-j-9Op5iYc-JHAmuCKY2Lv6fiRtVGxL30ZBoMm_KJRsaiYQHk6X0M3O40YU4-DTtE8nUkhkL4Mz_KWQrhNQWyjwa6ugqocFI6zePzsylUZyug_uHL1yrpb2TxqOLCTBLBOMEwgihJFNjQV9a9Cwrdhc9X-06JLTuJ3pP158J-f4uMLwt1jtEoWBLv-DAoX2wWnXaGPoZxagdXZdA7nISHKk5I-S0LCwmhyMwShZBryeravbQqYKxAUAG0d2k58ThEXHpQfL8oy-QQ8DLdRsjENSzufW_5WsA9ttSOq9b6jyzPTaqynsVZaZGsgQdoHt7WeJXgvjdF3DBWKF3TjNmnOx6dzd9HRk3pAev6661_aRiXS_NkBgyD3C7VWrr3XeQfk63ncc81twGdYSMphI8OW6Z2kFz6eKpkhxTbxuTfqMinM24DURZT1nTIBamVU74eA38bT1JoWn9dwECnkDUXrX4Efwk8BtGMlqxQm28m7PGNiNEpzyHUmY4mfBWFegRikJ2epzg`,
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // Reusable helper function to generate a field
            // policy for the Query.search field, keyed by
            // search query:
            search: relayStylePagination(["query"]),
          },
        },
      },
    }),
  // cache: cache,
});