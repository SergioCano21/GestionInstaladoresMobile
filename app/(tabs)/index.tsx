import { apiGetServices } from "@/api/services";
import Screen from "@/components/Screen";
import { ServiceCard } from "@/components/ServiceCard";
import Badge from "@/components/ui/Badge";
import { EmptyActiveService } from "@/components/ui/EmptyState";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { QUERY_KEYS } from "@/constants/Constants";
import { Service } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import React, { useCallback } from "react";
import { FlatList, ListRenderItem, TouchableOpacity } from "react-native";

export default function ActiveServices() {
  const {
    data: services,
    isLoading,
    refetch,
    isRefetching,
  } = useQuery<Service[]>({
    queryKey: [QUERY_KEYS.SERVICES, QUERY_KEYS.ACTIVE],
    queryFn: () => apiGetServices("active"),
  });

  const serviceItem: ListRenderItem<Service> = useCallback(
    ({ item }) => (
      <Link href={`/complete-service-process/${item._id}`} asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <ServiceCard service={item} type="active" />
        </TouchableOpacity>
      </Link>
    ),
    []
  );

  const keyExtractor = useCallback((item: Service) => item._id, []);

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const renderContent = () => {
    if (isLoading) return <LoadingSpinner />;
    if (!services?.length) return <EmptyActiveService />;

    return (
      <>
        <Badge variant="active">{services?.length} servicios</Badge>

        <FlatList
          keyExtractor={keyExtractor}
          data={services}
          scrollEnabled={false}
          renderItem={serviceItem}
        />
      </>
    );
  };

  return (
    <Screen onRefresh={onRefresh} refreshing={isRefetching}>
      {renderContent()}
    </Screen>
  );
}
