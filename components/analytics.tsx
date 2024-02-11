import Loglib from "@loglib/tracker/react"

// Loglib 是一个用于跟踪和记录用户行为的 JavaScript 库，可以在网站或应用程序中集成，以便收集和分析用户的操作、交互和行为数据。
// 通过 Loglib，你可以了解用户如何使用你的应用程序，从而进行优化、改进和决策。
export function Analytics() {
  return (
    <Loglib
      config={{
        id: "skateshop_sadmn",
      }}
    />
  )
}
