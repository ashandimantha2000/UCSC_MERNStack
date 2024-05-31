// Refer this for protected route implementation (App.jsx)

<LoginContext>
  <Router>
    <Routes>
      <Route path="/" element={<NewLogin />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/counter" element={<Counter />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/dashboard_2/*" element={<Dashboard_2 />} />
      </Route>
    </Routes>
  </Router>
</LoginContext>;
