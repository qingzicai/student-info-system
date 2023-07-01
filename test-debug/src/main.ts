// 设置Supabase URL和公钥
const supabaseUrl = 'https://qdzhecspothfvernvdms.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkemhlY3Nwb3RoZnZlcm52ZG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgwNjA2MTEsImV4cCI6MjAwMzYzNjYxMX0.za2iYPBZd9VV2nV0C085bZC0vCekMLH2hAR7PgyuqIA


// 构建API请求的URL路径
const studentsEndpoint = 'const studentsEndpoint = \'/rest/v1/students\';';

// 构建查看学生信息的请求对象
const requestStudentConfig = {
  method: 'GET',
  headers: {
    'apikey': supabaseKey
  }
};

// 用fetch方法来获得学生信息
async function fetchStudents() {
  const response = await fetch(`${supabaseUrl}${studentsEndpoint}`, requestStudentConfig);
  if (response.ok) {
    const studentsInfo = await response.json();
    console.log(studentsInfo);
  } else {
    console.error('Network response was not OK');
  }
}

fetchStudents();




//如果是修改学生信息，则在requestConfig里规定好method：‘POST’
// 获取用户输入的学生信息
  const name = document.querySelector('#nameInput').value;
  const age = document.querySelector('#ageInput').value;
  const className = document.querySelector('#classInput').value;

  // 构建请求配置对象
  const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, age, className }),
  };

  try {
    // 发送 POST 请求
    const response = await fetch(`${supabaseUrl}${studentsEndpoint}`, requestConfig);
    if (response.ok) {
      // 添加成功，可以在此处进行后续处理
      console.log('学生添加成功！');
    } else {
      // 处理请求失败情况
      console.error('添加学生失败');
    }
  } catch (error) {
    // 处理网络请求错误
    console.error('网络请求错误:', error);
  }
}