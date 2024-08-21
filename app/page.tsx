"use client";
import { useEffect, useState } from "react";
import { List, Avatar, Tag } from "antd";

function Home() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/issues", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const issuesData = await response.json();
        setIssues(issuesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getStatusColor = (status) => {
    if (status === "CLOSED") {
      return "red";
    }
    return "green";
  };

  return (
    <div className="bg-gradient-to-b from-[#2e003e] via-[#6a1b9a] to-[#d05ce3] min-h-screen py-10 mt-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-[#2e003e] mb-8">
          Issues List
        </h1>
        <List
          itemLayout="horizontal"
          dataSource={issues}
          renderItem={(issue) => (
            <List.Item className="border-b border-gray-300">
              <List.Item.Meta
                avatar={
                  <Avatar
                    className="shadow-lg w-[100px] h-[100px]"
                    size={"large"}
                    src={
                      "https://i.pinimg.com/736x/b8/0c/28/b80c2817ec04115e986becdc06425042.jpg"
                    }
                  />
                }
                title={
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#2e003e]">
                      {issue.title}
                    </span>
                    <Tag
                      color={getStatusColor(issue.status)}
                      className="rounded-full px-3 py-1"
                    >
                      {issue.status}
                    </Tag>
                  </div>
                }
                description={
                  <div>
                    <p className="text-gray-600">{issue.description}</p>
                    <p className="text-sm text-[#6a1b9a] mt-2">
                      Project: "Quasar by Salman"
                    </p>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}

function getStatusColor(status) {
  switch (status) {
    case "Open":
      return "blue";
    case "In Progress":
      return "orange";
    case "Closed":
      return "green";
    default:
      return "grey";
  }
}

export default Home;
