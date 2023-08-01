export const FormExample = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const submit = (e) => {
      e.preventDefault();
      console.log({ name, email, password });
   };

   return (
      <form onSubmit={submit}>
         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
         <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
         />
         <button type="submit">Enviar</button>
      </form>
   );
};
