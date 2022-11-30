import { supabase } from "../supabase/client";

export const getCourses = async () => {
  let { data: courses, error } = await supabase.from("courses").select("*");

  console.log(courses, error);
};

export const getCoursesOrderedByCategory = async (setData) => {
  let { data: courses, error } = await supabase
    .from("courses")
    .select("*, category(name)");

  const groupByCategory = Object.entries(
    courses.reduce((group, product) => {
      const {
        category: { name: categoryName },
      } = product;
      group[categoryName] = group[categoryName] ?? [];
      group[categoryName].push(product);
      return group;
    }, {})
  ).map(([key, value]) => ({ category: key, courses: value }));

  setData(groupByCategory);
};

export const getCourseById = async (id,setCourse) => {
  let {
    data: [course],
    error,
  } = await supabase.from("courses").select("*").eq("id", id);

  let { data: classes } = await supabase.from("classes").select("*").eq("courseId", id);

  setCourse({info: course, classes: classes});
};
