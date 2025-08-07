import StackSection from "@/components/techstack/stacksection";
import { agent, agentSociety, dataGeneration, models, tools, memories, storage, dataLoaders, environments, interpreters, retrievers, runtime, verifier, mcp, humanInTheLoop, observe } from "./index";


function TechStackContent() {
  // Handle item clicks to open URLs
  const handleItemClick = (item: { url?: string }) => {
    if (item.url) {
      window.open(item.url, '_blank');
    }
  };

  // Transform techstack data to include click handlers
  const agentData = {
    ...agent,
    items: agent.items.map(item => ({
      ...item,
      onClick: () => handleItemClick(item)
    }))
  };

  const agentSocietyData = {
    ...agentSociety,
    items: agentSociety.items.map(item => ({
      ...item,
      onClick: () => handleItemClick(item)
    }))
  };

  const modelsData = {
    ...models,
    items: models.items.map(item => ({
      ...item,
      onClick: () => handleItemClick(item)
    }))
  };


  return (
    <div className="flex-1 w-full max-w-[1200px] mx-auto py-8">
      <div className="flex flex-col">
        {/* Agent Section */}
        <StackSection
          title={agentData.title}
          subtitle={agentData.subtitle}
          items={agentData.items}
          variant={agent.variant as "neon"}
        />
         {/* Agent Society Section */}
         <StackSection
        title={agentSocietyData.title}
        subtitle={agentSocietyData.subtitle}
        items={agentSocietyData.items}
        variant={agentSociety.variant as "neon"}
        />
        {/* Data Generation Section */}
        <StackSection
          title={dataGeneration.title}
          items={dataGeneration.items}
          variant={dataGeneration.variant as "bone"}
        />
        {/* Models Section */}
        <StackSection
          title={modelsData.title}
          items={modelsData.items}
          variant={models.variant as "green"}
          logoPath="logos/models"
        />
        {/* Tools Section */}
        <StackSection
          title={tools.title}
          items={tools.items}
          variant={tools.variant as "yellow"}
          logoPath="logos/tools"
        />
        {/* Memories Section */}
        <StackSection
          title={memories.title}
          items={memories.items}
          variant={memories.variant as "pink"}
        />
        {/* Storage Section */}
        <StackSection
          title={storage.title}
          items={storage.items}
          variant={storage.variant as "orange"}
          logoPath="logos/storage"
        />
        {/* Data Loaders Section */}
        <StackSection 
          title={dataLoaders.title}
          items={dataLoaders.items}
          variant={dataLoaders.variant as "grey"}
          logoPath="logos/loaders"
        />
        {/* Environments Section */}
        <StackSection 
          title={environments.title}
          items={environments.items}
          variant={environments.variant as "grey"}
        />
        {/* Interpreters Section */}
        <StackSection 
          title={interpreters.title}
          items={interpreters.items}
          variant={interpreters.variant as "grey"}
          logoPath="logos/interpreters"
        />
        {/* Retrievers Section */}
        <StackSection 
          title={retrievers.title}
          items={retrievers.items}
          variant={retrievers.variant as "grey"}
        />
        {/* Runtime Section */}
        <StackSection 
          title={runtime.title}
          items={runtime.items}
          variant={runtime.variant as "grey"}
          logoPath="logos/run-time"
        />
        {/* Verifier Section */}
        <StackSection 
          title={verifier.title}
          items={verifier.items}
          variant={verifier.variant as "grey"}
        />
        {/* MCP Section */}
        <StackSection 
          title={mcp.title}
          items={mcp.items}
          variant={mcp.variant as "red"}
        />
        {/* Human In The Loop Section */}
        <StackSection 
          title={humanInTheLoop.title}
          items={humanInTheLoop.items}
          variant={humanInTheLoop.variant as "blue"}
          logoPath="logos/human-in-the-loop"
        />
        {/* Observe Section */}
        <StackSection 
          title={observe.title}
          items={observe.items}
          variant={observe.variant as "blue"} 
          logoPath="logos/observe"
        />  
      </div>
      <div className="flex flex-col items-center justify-center py-4 text-sm font-bold text-neon-700 italic">updated on July 18, 2025</div>
    </div>
  );
  }

export default TechStackContent;