import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import api from "../../axios";

// Register required Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const { state } = useContext(ProductContext);
  const [totalCustomers, setTotalCustomers] = useState(0);

  // Fetch total customers from API
  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const { data } = await api.get(`/user`);
        setTotalCustomers(data.length);
      } catch (error) {
        console.log("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  // Calculate total products
  const totalProducts = state.products.length;

  // Prepare category-wise product count data
  const categoryProductCount = state.products.reduce(
    (acc: any, product: any) => {
      const category = product.categoryId?.title || "Uncategorized";
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    {}
  );

  // Chart data for total products, categories, and customers
  const combinedData = {
    labels: ["Total Products", "Total Categories", "Total Customers"],
    datasets: [
      {
        label: "Statistics",
        data: [
          totalProducts,
          Object.keys(categoryProductCount).length,
          totalCustomers,
        ], // Total counts
        backgroundColor: [
          "rgba(75, 192, 192, 0.5)", // Products bar color
          "rgba(54, 162, 235, 0.5)", // Categories bar color
          "rgba(255, 206, 86, 0.5)", // Customers bar color
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Overall Statistics",
      },
    },
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-white">Admin Dashboard</h2>

      <div className="row">
        {/* Total Products Card */}
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title text-white">Total Products</h5>
              <p className="card-text-white">{totalProducts}</p>
            </div>
          </div>
        </div>

        {/* Total Categories Card */}
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title text-white">Total Categories</h5>
              <p className="card-text-white">
                {Object.keys(categoryProductCount).length}
              </p>
            </div>
          </div>
        </div>

        {/* Total Customers Card */}
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title text-white">Total Customers</h5>
              <p className="card-text-white">{totalCustomers}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Combined Statistics Chart */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-body">
              <Bar data={combinedData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
