import {
  BodyLarge,
  BodyMedium,
  Collapsible,
  H3,
  IconByName,
  Layout,
  overrideColorTheme,
} from "@shiksha/common-lib";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, HStack, Text, VStack, Stack, Avatar } from "native-base";
import SpotAssessmentCard from "../components/SpotAssessment/SpotAssessmentCard";
import StudentListCard from "../components/SpotAssessment/StudentList";
import ExamScoresCard from "../components/ExamScores/ExamScoresCard";
import colorTheme from "../colorTheme";
const colors = overrideColorTheme(colorTheme);

export default function Assessment() {
  const { t } = useTranslation();
  const [weekPage, setWeekPage] = useState(0);
  const [allAttendanceStatus, setAllAttendanceStatus] = useState({});
  const [students, setStudents] = useState([]);
  const [searchStudents, setSearchStudents] = useState([]);
  const [classObject, setClassObject] = useState({});
  const { classId } = useParams();
  const [loading, setLoading] = useState(false);
  const teacherId = sessionStorage.getItem("id");
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState();
  const [pageName, setPageName] = useState();

  if (pageName === "assessmentStudentList") {
    return (
      <Layout
        _header={{
          title: "Class VI A",
          isEnableSearchBtn: true,
          // setSearch: setSearch,
          subHeading: t("Class Details"),
          iconComponent: (
            <Avatar
              size="48px"
              borderRadius="md"
              source={{
                uri: "https://via.placeholder.com/50x50.png",
              }}
            />
          ),
        }}
        _appBar={{ languages: ["en"] }}
        subHeader={<H3>Choose a Student</H3>}
        _subHeader={{ bg: colors.cardBg, py: "6" }}
        _footer={{
          menues: [
            {
              title: "HOME",
              icon: "Home4LineIcon",
              module: "Registry",
              route: "/",
              routeparameters: {},
            },
            {
              title: "CLASSES",
              icon: "TeamLineIcon",
              module: "Registry",
              route: "/classes",
              routeparameters: {},
            },
            {
              title: "SCHOOL",
              icon: "GovernmentLineIcon",
              module: "Registry",
              route: "/",
              routeparameters: {},
            },
            {
              title: "MATERIALS",
              icon: "BookOpenLineIcon",
              module: "Registry",
              route: "/",
              routeparameters: {},
            },
            {
              title: "CAREER",
              icon: "UserLineIcon",
              module: "Registry",
              route: "/",
              routeparameters: {},
            },
          ],
        }}
      >
        <Stack space={1} mb="2" shadow={2}>
          <StudentListCard />
        </Stack>
      </Layout>
    );
  }

  return (
    <Layout
      _header={{
        title: "Spot Assessment",
        isEnableSearchBtn: true,
        // setSearch: setSearch,
        // subHeading: t("Spot Assessment")
      }}
      _appBar={{ languages: ["en"] }}
      subHeader={
        <Link
          to={"#"}
          style={{ color: "rgb(63, 63, 70)", textDecoration: "none" }}
        >
          <HStack space="4" justifyContent="space-between">
            <VStack>
              <Text fontSize={"lg"}>{"Assessment"}</Text>
            </VStack>
            <IconByName size="sm" name="ArrowRightSLineIcon" />
          </HStack>
        </Link>
      }
      _subHeader={{ bg: "attendanceCard.500" }}
      _footer={{
        menues: [
          {
            title: "HOME",
            icon: "Home4LineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "CLASSES",
            icon: "TeamLineIcon",
            module: "Registry",
            route: "/classes",
            routeparameters: {},
          },
          {
            title: "SCHOOL",
            icon: "GovernmentLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "MATERIALS",
            icon: "BookOpenLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
          {
            title: "CAREER",
            icon: "UserLineIcon",
            module: "Registry",
            route: "/",
            routeparameters: {},
          },
        ],
      }}
    >
      <Stack space={1} mb="2" shadow={2}>
        <Collapsible
          defaultCollapse={true}
          header={<BodyLarge>{t("Assessment")}</BodyLarge>}
        >
          <VStack py="4" space={4}>
            <SpotAssessmentCard setPageName={setPageName} />
            <ExamScoresCard setPageName={setPageName} />
          </VStack>
        </Collapsible>
      </Stack>
    </Layout>
  );
}
