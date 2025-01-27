const Loading = () => {
  return (
    <div className="w-full h-[50vh] flex justify-center items-center">
      {/* <div className="animate-spin rounded-full h-20 w-20 border-t-4  border-b-4 border-[#ff7f50]"></div> */}
      <div className="relative">
    
                                <div className="w-20 h-20 rounded-full absolute
                            border-8 border-solid border-gray-200 dark:border-[#3c6382]"></div>

                              
                                <div className="w-20 h-20 rounded-full animate-spin absolute
                            border-8 border-solid border-[#ff7f50] border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Loading;
