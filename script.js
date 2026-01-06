const projectData = {
  tasks: [
    {
      task_title: "Explore the world of management",
      task_description:
        "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      assets: [
        {
          asset_title: "Technical Project Management",
          asset_description:
            "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
        },

        {
          asset_title: "Threadbuild",
          asset_description:
            "Watch the video and thread build, and jot out key threads while watching that video.",
        },

        {
          asset_title: "Structure you pointers ",
          asset_description:
            "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
        },
        {
          asset_title: "4SA Method",
          asset_description: "To explore more read more",
        },
      ],
    },
  ],
};

const taskContainer = document.querySelector("#taskContainer");
const taskContainer1 = document.querySelector("#taskContainer1");

projectData.tasks.forEach((task) => {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");

  const tasktitle = document.createElement("h2");
  tasktitle.textContent = task.task_title;

  const taskdesc = document.createElement("p");
  taskdesc.textContent = task.task_description;

  taskDiv.appendChild(tasktitle);
  taskDiv.appendChild(taskdesc);

  taskContainer.appendChild(taskDiv);


  task.assets.forEach((asset,index) => {
    const assetCard = document.createElement("div");
    assetCard.classList.add("asset-card");

    const assetHeader = document.createElement("div");
    assetHeader.classList.add("asset-header");

    const title = document.createElement("span");
    title.textContent = asset.asset_title;
    title.classList.add("asset-title");


    const desc = document.createElement("div");
    desc.textContent = "Description: " + asset.asset_description;
    desc.classList.add("asset-description");

    

    assetHeader.appendChild(title);
    
    assetCard.appendChild(assetHeader);
    assetCard.appendChild(desc);

    if(index==0){
         const img = document.createElement("img");
         img.src = "/images/Youtube.png";
         img.alt = "YouTube Thumbnail";
         img.classList.add("asset-image");

        assetCard.appendChild(img);
    }

    taskContainer1.appendChild(assetCard);
  });
});

