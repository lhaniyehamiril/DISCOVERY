import { Toaster } from "react-hot-toast"


const CustomToaster = () => {
  return (
       <Toaster
        position="bottom-center"
        gutter={50}
        containerStyle={{ marginBottom: "1rem" }}
        toastOptions={{
          success: {
            duration: 1000,
          },
          error: {
            duration: 2000,
          },
          style: {
            borderRadius: '2rem',
            fontSize: "13px",
            maxWidth: "140px",
            padding: "5px 10px",
            backgroundColor: "var(--green)",
            color: "var(--black)",
          },
        }}
      />
  )
}

export default CustomToaster
