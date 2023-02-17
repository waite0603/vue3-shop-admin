import { ElNotification } from "element-plus";

// 消息提示, dangerouslyUseHTMLString: 是否将 message 属性作为 HTML 片段处理
export function toast(message,type = "success",dangerouslyUseHTMLString = false){
    ElNotification({
        message,
        type,
        dangerouslyUseHTMLString,
        duration:3000
    })
}
