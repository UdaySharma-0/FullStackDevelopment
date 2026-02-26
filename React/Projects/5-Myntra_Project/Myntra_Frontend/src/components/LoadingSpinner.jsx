const LoadingSpinner = ()=>{
    return (
      <div className="flex items-center justify-center gap-2 py-10 h-50">
        <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
        <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
        <span className="h-3 w-3 bg-blue-600 rounded-full animate-bounce"></span>
      </div>
  );
}

export default LoadingSpinner;