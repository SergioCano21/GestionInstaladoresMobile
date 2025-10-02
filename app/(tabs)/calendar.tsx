import { apiGetSchedules } from "@/api/schedule";
import BlockerModal from "@/components/BlockerModal";
import Screen from "@/components/Screen";
import CalendarItem from "@/components/ui/CalendarItem";
import { EmptyCalendar } from "@/components/ui/EmptyState";
import { PlusIcon } from "@/components/ui/Icons";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import "@/constants/calendarLocale";
import { Colors } from "@/constants/Colors";
import { QUERY_KEYS } from "@/constants/Constants";
import dayjs from "@/services/dayjsConfig";
import { Schedule, Section } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { useFocusEffect, useNavigation } from "expo-router";
import { cssInterop } from "nativewind";
import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from "react-native-calendars";

cssInterop(CalendarProvider, { className: "style" });

export default function Calendar() {
  // Header configuration
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          className="mr-4"
          activeOpacity={0.7}
          onPress={handleAddBlocker}
          hitSlop={{ left: 40, top: 20, bottom: 20, right: 20 }}
        >
          <PlusIcon color={Colors.primary.default} size={24} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const { data: sections, isLoading } = useQuery<Section[]>({
    queryKey: [QUERY_KEYS.SCHEDULE],
    queryFn: apiGetSchedules,
  });

  const today = useMemo(() => getToday(), []);
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedBlocker, setSelectedBlocker] = useState<Schedule | null>(null);

  // Display only the services of the selected date
  const filteredSchedules = useMemo(() => {
    return sections?.filter((section) => section.title === selectedDate) ?? [];
  }, [selectedDate, sections]);

  const handleEditBlocker = (blocker: Schedule) => {
    setSelectedBlocker(blocker);
    setModalVisible(true);
  };

  const handleAddBlocker = () => {
    setSelectedBlocker(null);
    setModalVisible(true);
  };

  useFocusEffect(
    useCallback(() => {
      return () => setSelectedDate(today);
    }, [today])
  );

  console.log(selectedDate);
  if (isLoading)
    return (
      <Screen>
        <LoadingSpinner />
      </Screen>
    );
  console.log(selectedDate);
  return (
    <>
      <CalendarProvider
        date={selectedDate}
        onDateChanged={(date) => setSelectedDate(date)}
        className="bg-gray-100"
      >
        <View className="bg-white">
          <WeekCalendar
            firstDay={1}
            allowShadow={false}
            theme={{
              textSectionTitleColor: Colors.black.default,
              todayTextColor: Colors.primary.default,
              dayTextColor: Colors.black.default,
              textDayFontWeight: "400",
              selectedDayBackgroundColor: Colors.primary.background,
              selectedDayTextColor: Colors.primary.default,
            }}
            markedDates={{
              [selectedDate]: {
                disableTouchEvent: true,
              },
            }}
          />
        </View>
        <AgendaList
          stickyHeaderHiddenOnScroll={false}
          sections={
            filteredSchedules.length > 0
              ? filteredSchedules
              : [{ title: selectedDate, data: [{}] }]
          }
          renderItem={({ item }) =>
            Object.keys(item).length === 0 ? (
              <EmptyCalendar />
            ) : (
              <CalendarItem data={item} onEdit={handleEditBlocker} />
            )
          }
        />
      </CalendarProvider>

      {/* Modal */}
      <BlockerModal
        data={selectedBlocker}
        isVisible={modalVisible}
        showModal={setModalVisible}
      />
    </>
  );

  function getToday(): string {
    return dayjs().format("YYYY-MM-DD");
  }
}
