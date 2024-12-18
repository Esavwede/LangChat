
const { config } = require('dotenv')
config() 
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai")
const { HumanMessage, SystemMessage, AIMessage } = require("@langchain/core/messages")


const llm = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash",
  temperature: 0.5,
  maxRetries: 2,
  maxOutputTokens: 2048,
  apiKey: process.env.GOOGLE_GEN_AI_KEY
})


  async function run()
  {
    try 
    {

        const s_message = new SystemMessage({ content:"You are an AI that suggest three names for a users pet."})
        const h_message = new HumanMessage({ content:` I just bought a dog. Please help me give it a name` })
        const ai_message = new AIMessage({ content:"1. lema 2. barkbie 3. runsalot"})

        const s_message_1 = new SystemMessage({ content:"You are an AI that gives of list of ten names for any specified animal"})
        const h_message_1 = new HumanMessage({ content:` I just bought a dog. Please help me give it a name` })
        const ai_message_1 = new AIMessage({ content:"1. melz 2. lobie 3. ronda"})

        const s_message_2 = new SystemMessage({ content:"You are an AI that gives of list of ten names for any specified animal"})
        const h_message_2 = new HumanMessage({ content:` I just bought a tortoise. Please help me give it a name` })
        const ai_message_2 = new AIMessage({ content:"1. akorama 2. balsy 3. mesh "})

        const h_message_3 = new HumanMessage({ content:` I just bought a cat. Please help me give it a name` })


        const aiMsg = await llm.invoke([
                s_message,
                h_message,
                ai_message,
                h_message_1,
                ai_message_1,
                h_message_2,
                ai_message_2,
                h_message_3
          ]);
          
          console.dir( aiMsg ) 
    }
    catch(e)
    {
        console.log("GEN AI ERROR")
        console.log(e) 
    }
  }


  run()
   