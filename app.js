
const { config } = require('dotenv')
config() 
const { ChatGoogleGenerativeAI } = require("@langchain/google-genai")
const { HumanMessage, SystemMessage, AIMessage } = require("@langchain/core/messages")
const { PromptTemplate } = require("@langchain/core/prompts")


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
 
        const humanMessageTemplate = new PromptTemplate(
          {
            template: "Give me a list of all the states in {country}.",
            inputVariables: ["country"]
          }
        )


        const systemMessage = new SystemMessage({ content: "Your Role: You are an AI system that returns a list of all the states in a country"})
        const humanMessage = new HumanMessage({ content: await humanMessageTemplate.format({ "country":"Nigeria" })}) 

        const s_message = new SystemMessage({ content:"You are an AI that suggest three names for a users pet."})
        const h_message = new HumanMessage({ content:` I just bought a dog. Please help me give it a name` })
        const ai_message = new AIMessage({ content:"1. lema 2. barkbie 3. runsalot"})

        const h_message_1 = new HumanMessage({ content:` I just bought a dog. Please help me give it a name` })
        const ai_message_1 = new AIMessage({ content:"1. melz 2. lobie 3. ronda"})

        const h_message_2 = new HumanMessage({ content:` I just bought a tortoise. Please help me give it a name` })
        const ai_message_2 = new AIMessage({ content:"1. akorama 2. balsy 3. mesh "})

        const h_message_3 = new HumanMessage({ content:` I just bought a cat. Please help me give it a name` })


        const aiMsg = await llm.invoke([
              systemMessage, 
              humanMessage 
          ]);
          
          console.log( aiMsg.content ) 
    }
    catch(e)
    {
        console.log("GEN AI ERROR")
        console.log(e) 
    }
  }


  run()
   