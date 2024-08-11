import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  count: Scalars['Int']['output'];
};

export type AggregateAlert = {
  __typename?: 'AggregateAlert';
  _avg?: Maybe<AlertAvgAggregate>;
  _count?: Maybe<AlertCountAggregate>;
  _max?: Maybe<AlertMaxAggregate>;
  _min?: Maybe<AlertMinAggregate>;
  _sum?: Maybe<AlertSumAggregate>;
};

export type AggregateChat = {
  __typename?: 'AggregateChat';
  _count?: Maybe<ChatCountAggregate>;
  _max?: Maybe<ChatMaxAggregate>;
  _min?: Maybe<ChatMinAggregate>;
};

export type AggregateEmergency = {
  __typename?: 'AggregateEmergency';
  _count?: Maybe<EmergencyCountAggregate>;
  _max?: Maybe<EmergencyMaxAggregate>;
  _min?: Maybe<EmergencyMinAggregate>;
};

export type AggregateGroup = {
  __typename?: 'AggregateGroup';
  _avg?: Maybe<GroupAvgAggregate>;
  _count?: Maybe<GroupCountAggregate>;
  _max?: Maybe<GroupMaxAggregate>;
  _min?: Maybe<GroupMinAggregate>;
  _sum?: Maybe<GroupSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type Alert = {
  __typename?: 'Alert';
  _count: AlertCount;
  chats?: Maybe<Array<Chat>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  creator: User;
  emergency: Scalars['String']['output'];
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<Array<User>>;
};

export type AlertAvgAggregate = {
  __typename?: 'AlertAvgAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type AlertAvgAggregateInput = {
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlertAvgOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type AlertCount = {
  __typename?: 'AlertCount';
  chats: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};

export type AlertCountAggregate = {
  __typename?: 'AlertCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdBy: Scalars['Int']['output'];
  emergency: Scalars['Int']['output'];
  groupId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  latitude: Scalars['Int']['output'];
  longitude: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AlertCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  emergency?: InputMaybe<Scalars['Boolean']['input']>;
  groupId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlertCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  emergency?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AlertCreateInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutAlertInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator: UserCreateNestedOneWithoutCreatedAlertsInput;
  emergency: Scalars['String']['input'];
  group?: InputMaybe<GroupCreateNestedOneWithoutAlertsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  users?: InputMaybe<UserCreateNestedManyWithoutAlertsInput>;
};

export type AlertCreateManyCreatorInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  emergency: Scalars['String']['input'];
  groupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AlertCreateManyCreatorInputEnvelope = {
  data: Array<AlertCreateManyCreatorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlertCreateManyGroupInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['String']['input'];
  emergency: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AlertCreateManyGroupInputEnvelope = {
  data: Array<AlertCreateManyGroupInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlertCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['String']['input'];
  emergency: Scalars['String']['input'];
  groupId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AlertCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<AlertCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<AlertCreateManyCreatorInputEnvelope>;
};

export type AlertCreateNestedManyWithoutGroupInput = {
  connect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<AlertCreateWithoutGroupInput>>;
  createMany?: InputMaybe<AlertCreateManyGroupInputEnvelope>;
};

export type AlertCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<AlertCreateWithoutUsersInput>>;
};

export type AlertCreateNestedOneWithoutChatsInput = {
  connect?: InputMaybe<AlertWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AlertCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<AlertCreateWithoutChatsInput>;
};

export type AlertCreateOrConnectWithoutChatsInput = {
  create: AlertCreateWithoutChatsInput;
  where: AlertWhereUniqueInput;
};

export type AlertCreateOrConnectWithoutCreatorInput = {
  create: AlertCreateWithoutCreatorInput;
  where: AlertWhereUniqueInput;
};

export type AlertCreateOrConnectWithoutGroupInput = {
  create: AlertCreateWithoutGroupInput;
  where: AlertWhereUniqueInput;
};

export type AlertCreateOrConnectWithoutUsersInput = {
  create: AlertCreateWithoutUsersInput;
  where: AlertWhereUniqueInput;
};

export type AlertCreateWithoutChatsInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator: UserCreateNestedOneWithoutCreatedAlertsInput;
  emergency: Scalars['String']['input'];
  group?: InputMaybe<GroupCreateNestedOneWithoutAlertsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  users?: InputMaybe<UserCreateNestedManyWithoutAlertsInput>;
};

export type AlertCreateWithoutCreatorInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutAlertInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  emergency: Scalars['String']['input'];
  group?: InputMaybe<GroupCreateNestedOneWithoutAlertsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  users?: InputMaybe<UserCreateNestedManyWithoutAlertsInput>;
};

export type AlertCreateWithoutGroupInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutAlertInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator: UserCreateNestedOneWithoutCreatedAlertsInput;
  emergency: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  users?: InputMaybe<UserCreateNestedManyWithoutAlertsInput>;
};

export type AlertCreateWithoutUsersInput = {
  chats?: InputMaybe<ChatCreateNestedManyWithoutAlertInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator: UserCreateNestedOneWithoutCreatedAlertsInput;
  emergency: Scalars['String']['input'];
  group?: InputMaybe<GroupCreateNestedOneWithoutAlertsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AlertGroupBy = {
  __typename?: 'AlertGroupBy';
  _avg?: Maybe<AlertAvgAggregate>;
  _count?: Maybe<AlertCountAggregate>;
  _max?: Maybe<AlertMaxAggregate>;
  _min?: Maybe<AlertMinAggregate>;
  _sum?: Maybe<AlertSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  emergency: Scalars['String']['output'];
  groupId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AlertListRelationFilter = {
  every?: InputMaybe<AlertWhereInput>;
  none?: InputMaybe<AlertWhereInput>;
  some?: InputMaybe<AlertWhereInput>;
};

export type AlertMaxAggregate = {
  __typename?: 'AlertMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  emergency?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AlertMaxAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  emergency?: InputMaybe<Scalars['Boolean']['input']>;
  groupId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlertMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  emergency?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AlertMinAggregate = {
  __typename?: 'AlertMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  emergency?: Maybe<Scalars['String']['output']>;
  groupId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AlertMinAggregateInput = {
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  emergency?: InputMaybe<Scalars['Boolean']['input']>;
  groupId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlertMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  emergency?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AlertOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AlertOrderByWithAggregationInput = {
  _avg?: InputMaybe<AlertAvgOrderByAggregateInput>;
  _count?: InputMaybe<AlertCountOrderByAggregateInput>;
  _max?: InputMaybe<AlertMaxOrderByAggregateInput>;
  _min?: InputMaybe<AlertMinOrderByAggregateInput>;
  _sum?: InputMaybe<AlertSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  emergency?: InputMaybe<SortOrder>;
  groupId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AlertOrderByWithRelationInput = {
  chats?: InputMaybe<ChatOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  creator?: InputMaybe<UserOrderByWithRelationInput>;
  emergency?: InputMaybe<SortOrder>;
  group?: InputMaybe<GroupOrderByWithRelationInput>;
  groupId?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export type AlertRelationFilter = {
  is?: InputMaybe<AlertWhereInput>;
  isNot?: InputMaybe<AlertWhereInput>;
};

export enum AlertScalarFieldEnum {
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Emergency = 'emergency',
  GroupId = 'groupId',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  UpdatedAt = 'updatedAt'
}

export type AlertScalarWhereInput = {
  AND?: InputMaybe<Array<AlertScalarWhereInput>>;
  NOT?: InputMaybe<Array<AlertScalarWhereInput>>;
  OR?: InputMaybe<Array<AlertScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  emergency?: InputMaybe<StringFilter>;
  groupId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AlertScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AlertScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AlertScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AlertScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdBy?: InputMaybe<StringWithAggregatesFilter>;
  emergency?: InputMaybe<StringWithAggregatesFilter>;
  groupId?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  latitude?: InputMaybe<FloatWithAggregatesFilter>;
  longitude?: InputMaybe<FloatWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AlertSumAggregate = {
  __typename?: 'AlertSumAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type AlertSumAggregateInput = {
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AlertSumOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type AlertUpdateInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutAlertNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutCreatedAlertsNestedInput>;
  emergency?: InputMaybe<StringFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneWithoutAlertsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutAlertsNestedInput>;
};

export type AlertUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emergency?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AlertUpdateManyWithWhereWithoutCreatorInput = {
  data: AlertUpdateManyMutationInput;
  where: AlertScalarWhereInput;
};

export type AlertUpdateManyWithWhereWithoutGroupInput = {
  data: AlertUpdateManyMutationInput;
  where: AlertScalarWhereInput;
};

export type AlertUpdateManyWithWhereWithoutUsersInput = {
  data: AlertUpdateManyMutationInput;
  where: AlertScalarWhereInput;
};

export type AlertUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<AlertCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<AlertCreateManyCreatorInputEnvelope>;
  delete?: InputMaybe<Array<AlertWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AlertScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  set?: InputMaybe<Array<AlertWhereUniqueInput>>;
  update?: InputMaybe<Array<AlertUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: InputMaybe<Array<AlertUpdateManyWithWhereWithoutCreatorInput>>;
  upsert?: InputMaybe<Array<AlertUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type AlertUpdateManyWithoutGroupNestedInput = {
  connect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertCreateOrConnectWithoutGroupInput>>;
  create?: InputMaybe<Array<AlertCreateWithoutGroupInput>>;
  createMany?: InputMaybe<AlertCreateManyGroupInputEnvelope>;
  delete?: InputMaybe<Array<AlertWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AlertScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  set?: InputMaybe<Array<AlertWhereUniqueInput>>;
  update?: InputMaybe<Array<AlertUpdateWithWhereUniqueWithoutGroupInput>>;
  updateMany?: InputMaybe<Array<AlertUpdateManyWithWhereWithoutGroupInput>>;
  upsert?: InputMaybe<Array<AlertUpsertWithWhereUniqueWithoutGroupInput>>;
};

export type AlertUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AlertCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<AlertCreateWithoutUsersInput>>;
  delete?: InputMaybe<Array<AlertWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AlertScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AlertWhereUniqueInput>>;
  set?: InputMaybe<Array<AlertWhereUniqueInput>>;
  update?: InputMaybe<Array<AlertUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<AlertUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<AlertUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type AlertUpdateOneRequiredWithoutChatsNestedInput = {
  connect?: InputMaybe<AlertWhereUniqueInput>;
  connectOrCreate?: InputMaybe<AlertCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<AlertCreateWithoutChatsInput>;
  update?: InputMaybe<AlertUpdateToOneWithWhereWithoutChatsInput>;
  upsert?: InputMaybe<AlertUpsertWithoutChatsInput>;
};

export type AlertUpdateToOneWithWhereWithoutChatsInput = {
  data: AlertUpdateWithoutChatsInput;
  where?: InputMaybe<AlertWhereInput>;
};

export type AlertUpdateWithWhereUniqueWithoutCreatorInput = {
  data: AlertUpdateWithoutCreatorInput;
  where: AlertWhereUniqueInput;
};

export type AlertUpdateWithWhereUniqueWithoutGroupInput = {
  data: AlertUpdateWithoutGroupInput;
  where: AlertWhereUniqueInput;
};

export type AlertUpdateWithWhereUniqueWithoutUsersInput = {
  data: AlertUpdateWithoutUsersInput;
  where: AlertWhereUniqueInput;
};

export type AlertUpdateWithoutChatsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutCreatedAlertsNestedInput>;
  emergency?: InputMaybe<StringFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneWithoutAlertsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutAlertsNestedInput>;
};

export type AlertUpdateWithoutCreatorInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutAlertNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  emergency?: InputMaybe<StringFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneWithoutAlertsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutAlertsNestedInput>;
};

export type AlertUpdateWithoutGroupInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutAlertNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutCreatedAlertsNestedInput>;
  emergency?: InputMaybe<StringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutAlertsNestedInput>;
};

export type AlertUpdateWithoutUsersInput = {
  chats?: InputMaybe<ChatUpdateManyWithoutAlertNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutCreatedAlertsNestedInput>;
  emergency?: InputMaybe<StringFieldUpdateOperationsInput>;
  group?: InputMaybe<GroupUpdateOneWithoutAlertsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AlertUpsertWithWhereUniqueWithoutCreatorInput = {
  create: AlertCreateWithoutCreatorInput;
  update: AlertUpdateWithoutCreatorInput;
  where: AlertWhereUniqueInput;
};

export type AlertUpsertWithWhereUniqueWithoutGroupInput = {
  create: AlertCreateWithoutGroupInput;
  update: AlertUpdateWithoutGroupInput;
  where: AlertWhereUniqueInput;
};

export type AlertUpsertWithWhereUniqueWithoutUsersInput = {
  create: AlertCreateWithoutUsersInput;
  update: AlertUpdateWithoutUsersInput;
  where: AlertWhereUniqueInput;
};

export type AlertUpsertWithoutChatsInput = {
  create: AlertCreateWithoutChatsInput;
  update: AlertUpdateWithoutChatsInput;
  where?: InputMaybe<AlertWhereInput>;
};

export type AlertWhereInput = {
  AND?: InputMaybe<Array<AlertWhereInput>>;
  NOT?: InputMaybe<Array<AlertWhereInput>>;
  OR?: InputMaybe<Array<AlertWhereInput>>;
  chats?: InputMaybe<ChatListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  creator?: InputMaybe<UserRelationFilter>;
  emergency?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupNullableRelationFilter>;
  groupId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type AlertWhereUniqueInput = {
  AND?: InputMaybe<Array<AlertWhereInput>>;
  NOT?: InputMaybe<Array<AlertWhereInput>>;
  OR?: InputMaybe<Array<AlertWhereInput>>;
  chats?: InputMaybe<ChatListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  creator?: InputMaybe<UserRelationFilter>;
  emergency?: InputMaybe<StringFilter>;
  group?: InputMaybe<GroupNullableRelationFilter>;
  groupId?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type Chat = {
  __typename?: 'Chat';
  alert: Alert;
  alertId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ChatCountAggregate = {
  __typename?: 'ChatCountAggregate';
  _all: Scalars['Int']['output'];
  alertId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  imageUrl: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  timestamp: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ChatCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  alertId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  imageUrl?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatCountOrderByAggregateInput = {
  alertId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatCreateInput = {
  alert: AlertCreateNestedOneWithoutChatsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutChatsInput;
};

export type ChatCreateManyAlertInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type ChatCreateManyAlertInputEnvelope = {
  data: Array<ChatCreateManyAlertInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatCreateManyInput = {
  alertId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type ChatCreateManyUserInput = {
  alertId: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatCreateManyUserInputEnvelope = {
  data: Array<ChatCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatCreateNestedManyWithoutAlertInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutAlertInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutAlertInput>>;
  createMany?: InputMaybe<ChatCreateManyAlertInputEnvelope>;
};

export type ChatCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutUserInput>>;
  createMany?: InputMaybe<ChatCreateManyUserInputEnvelope>;
};

export type ChatCreateOrConnectWithoutAlertInput = {
  create: ChatCreateWithoutAlertInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutUserInput = {
  create: ChatCreateWithoutUserInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateWithoutAlertInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutChatsInput;
};

export type ChatCreateWithoutUserInput = {
  alert: AlertCreateNestedOneWithoutChatsInput;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  timestamp?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChatGroupBy = {
  __typename?: 'ChatGroupBy';
  _count?: Maybe<ChatCountAggregate>;
  _max?: Maybe<ChatMaxAggregate>;
  _min?: Maybe<ChatMinAggregate>;
  alertId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  timestamp: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type ChatListRelationFilter = {
  every?: InputMaybe<ChatWhereInput>;
  none?: InputMaybe<ChatWhereInput>;
  some?: InputMaybe<ChatWhereInput>;
};

export type ChatMaxAggregate = {
  __typename?: 'ChatMaxAggregate';
  alertId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ChatMaxAggregateInput = {
  alertId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  imageUrl?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatMaxOrderByAggregateInput = {
  alertId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatMinAggregate = {
  __typename?: 'ChatMinAggregate';
  alertId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ChatMinAggregateInput = {
  alertId?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  imageUrl?: InputMaybe<Scalars['Boolean']['input']>;
  message?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatMinOrderByAggregateInput = {
  alertId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ChatOrderByWithAggregationInput = {
  _count?: InputMaybe<ChatCountOrderByAggregateInput>;
  _max?: InputMaybe<ChatMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChatMinOrderByAggregateInput>;
  alertId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrderInput>;
  message?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatOrderByWithRelationInput = {
  alert?: InputMaybe<AlertOrderByWithRelationInput>;
  alertId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  imageUrl?: InputMaybe<SortOrderInput>;
  message?: InputMaybe<SortOrder>;
  timestamp?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ChatScalarFieldEnum {
  AlertId = 'alertId',
  Id = 'id',
  ImageUrl = 'imageUrl',
  Message = 'message',
  Timestamp = 'timestamp',
  UserId = 'userId'
}

export type ChatScalarWhereInput = {
  AND?: InputMaybe<Array<ChatScalarWhereInput>>;
  NOT?: InputMaybe<Array<ChatScalarWhereInput>>;
  OR?: InputMaybe<Array<ChatScalarWhereInput>>;
  alertId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ChatScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  alertId?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  imageUrl?: InputMaybe<StringNullableWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  timestamp?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ChatUpdateInput = {
  alert?: InputMaybe<AlertUpdateOneRequiredWithoutChatsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatsNestedInput>;
};

export type ChatUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatUpdateManyWithWhereWithoutAlertInput = {
  data: ChatUpdateManyMutationInput;
  where: ChatScalarWhereInput;
};

export type ChatUpdateManyWithWhereWithoutUserInput = {
  data: ChatUpdateManyMutationInput;
  where: ChatScalarWhereInput;
};

export type ChatUpdateManyWithoutAlertNestedInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutAlertInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutAlertInput>>;
  createMany?: InputMaybe<ChatCreateManyAlertInputEnvelope>;
  delete?: InputMaybe<Array<ChatWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatUpdateWithWhereUniqueWithoutAlertInput>>;
  updateMany?: InputMaybe<Array<ChatUpdateManyWithWhereWithoutAlertInput>>;
  upsert?: InputMaybe<Array<ChatUpsertWithWhereUniqueWithoutAlertInput>>;
};

export type ChatUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ChatCreateWithoutUserInput>>;
  createMany?: InputMaybe<ChatCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ChatWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ChatUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ChatUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ChatUpdateWithWhereUniqueWithoutAlertInput = {
  data: ChatUpdateWithoutAlertInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateWithWhereUniqueWithoutUserInput = {
  data: ChatUpdateWithoutUserInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpdateWithoutAlertInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatsNestedInput>;
};

export type ChatUpdateWithoutUserInput = {
  alert?: InputMaybe<AlertUpdateOneRequiredWithoutChatsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  imageUrl?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  timestamp?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatUpsertWithWhereUniqueWithoutAlertInput = {
  create: ChatCreateWithoutAlertInput;
  update: ChatUpdateWithoutAlertInput;
  where: ChatWhereUniqueInput;
};

export type ChatUpsertWithWhereUniqueWithoutUserInput = {
  create: ChatCreateWithoutUserInput;
  update: ChatUpdateWithoutUserInput;
  where: ChatWhereUniqueInput;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  alert?: InputMaybe<AlertRelationFilter>;
  alertId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ChatWhereUniqueInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  alert?: InputMaybe<AlertRelationFilter>;
  alertId?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<StringNullableFilter>;
  message?: InputMaybe<StringFilter>;
  timestamp?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Emergency = {
  __typename?: 'Emergency';
  assignedTo: Scalars['String']['output'];
  assignee: User;
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  creator: User;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EmergencyCountAggregate = {
  __typename?: 'EmergencyCountAggregate';
  _all: Scalars['Int']['output'];
  assignedTo: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdBy: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type EmergencyCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmergencyCountOrderByAggregateInput = {
  assignedTo?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmergencyCreateInput = {
  assignee: UserCreateNestedOneWithoutAssignedEmergenciesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator: UserCreateNestedOneWithoutCreatedEmergenciesInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmergencyCreateManyAssigneeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmergencyCreateManyAssigneeInputEnvelope = {
  data: Array<EmergencyCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmergencyCreateManyCreatorInput = {
  assignedTo: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmergencyCreateManyCreatorInputEnvelope = {
  data: Array<EmergencyCreateManyCreatorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmergencyCreateManyInput = {
  assignedTo: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmergencyCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmergencyCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<EmergencyCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<EmergencyCreateManyAssigneeInputEnvelope>;
};

export type EmergencyCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmergencyCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<EmergencyCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<EmergencyCreateManyCreatorInputEnvelope>;
};

export type EmergencyCreateOrConnectWithoutAssigneeInput = {
  create: EmergencyCreateWithoutAssigneeInput;
  where: EmergencyWhereUniqueInput;
};

export type EmergencyCreateOrConnectWithoutCreatorInput = {
  create: EmergencyCreateWithoutCreatorInput;
  where: EmergencyWhereUniqueInput;
};

export type EmergencyCreateWithoutAssigneeInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator: UserCreateNestedOneWithoutCreatedEmergenciesInput;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmergencyCreateWithoutCreatorInput = {
  assignee: UserCreateNestedOneWithoutAssignedEmergenciesInput;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EmergencyGroupBy = {
  __typename?: 'EmergencyGroupBy';
  _count?: Maybe<EmergencyCountAggregate>;
  _max?: Maybe<EmergencyMaxAggregate>;
  _min?: Maybe<EmergencyMinAggregate>;
  assignedTo: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  createdBy: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type EmergencyListRelationFilter = {
  every?: InputMaybe<EmergencyWhereInput>;
  none?: InputMaybe<EmergencyWhereInput>;
  some?: InputMaybe<EmergencyWhereInput>;
};

export type EmergencyMaxAggregate = {
  __typename?: 'EmergencyMaxAggregate';
  assignedTo?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmergencyMaxAggregateInput = {
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmergencyMaxOrderByAggregateInput = {
  assignedTo?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmergencyMinAggregate = {
  __typename?: 'EmergencyMinAggregate';
  assignedTo?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EmergencyMinAggregateInput = {
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EmergencyMinOrderByAggregateInput = {
  assignedTo?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmergencyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmergencyOrderByWithAggregationInput = {
  _count?: InputMaybe<EmergencyCountOrderByAggregateInput>;
  _max?: InputMaybe<EmergencyMaxOrderByAggregateInput>;
  _min?: InputMaybe<EmergencyMinOrderByAggregateInput>;
  assignedTo?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type EmergencyOrderByWithRelationInput = {
  assignedTo?: InputMaybe<SortOrder>;
  assignee?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  creator?: InputMaybe<UserOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum EmergencyScalarFieldEnum {
  AssignedTo = 'assignedTo',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type EmergencyScalarWhereInput = {
  AND?: InputMaybe<Array<EmergencyScalarWhereInput>>;
  NOT?: InputMaybe<Array<EmergencyScalarWhereInput>>;
  OR?: InputMaybe<Array<EmergencyScalarWhereInput>>;
  assignedTo?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmergencyScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<EmergencyScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<EmergencyScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<EmergencyScalarWhereWithAggregatesInput>>;
  assignedTo?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdBy?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type EmergencyUpdateInput = {
  assignee?: InputMaybe<UserUpdateOneRequiredWithoutAssignedEmergenciesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutCreatedEmergenciesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmergencyUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmergencyUpdateManyWithWhereWithoutAssigneeInput = {
  data: EmergencyUpdateManyMutationInput;
  where: EmergencyScalarWhereInput;
};

export type EmergencyUpdateManyWithWhereWithoutCreatorInput = {
  data: EmergencyUpdateManyMutationInput;
  where: EmergencyScalarWhereInput;
};

export type EmergencyUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmergencyCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<EmergencyCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<EmergencyCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmergencyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  set?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  update?: InputMaybe<Array<EmergencyUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<EmergencyUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<EmergencyUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type EmergencyUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<EmergencyCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<EmergencyCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<EmergencyCreateManyCreatorInputEnvelope>;
  delete?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<EmergencyScalarWhereInput>>;
  disconnect?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  set?: InputMaybe<Array<EmergencyWhereUniqueInput>>;
  update?: InputMaybe<Array<EmergencyUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: InputMaybe<Array<EmergencyUpdateManyWithWhereWithoutCreatorInput>>;
  upsert?: InputMaybe<Array<EmergencyUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type EmergencyUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: EmergencyUpdateWithoutAssigneeInput;
  where: EmergencyWhereUniqueInput;
};

export type EmergencyUpdateWithWhereUniqueWithoutCreatorInput = {
  data: EmergencyUpdateWithoutCreatorInput;
  where: EmergencyWhereUniqueInput;
};

export type EmergencyUpdateWithoutAssigneeInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneRequiredWithoutCreatedEmergenciesNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmergencyUpdateWithoutCreatorInput = {
  assignee?: InputMaybe<UserUpdateOneRequiredWithoutAssignedEmergenciesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type EmergencyUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: EmergencyCreateWithoutAssigneeInput;
  update: EmergencyUpdateWithoutAssigneeInput;
  where: EmergencyWhereUniqueInput;
};

export type EmergencyUpsertWithWhereUniqueWithoutCreatorInput = {
  create: EmergencyCreateWithoutCreatorInput;
  update: EmergencyUpdateWithoutCreatorInput;
  where: EmergencyWhereUniqueInput;
};

export type EmergencyWhereInput = {
  AND?: InputMaybe<Array<EmergencyWhereInput>>;
  NOT?: InputMaybe<Array<EmergencyWhereInput>>;
  OR?: InputMaybe<Array<EmergencyWhereInput>>;
  assignedTo?: InputMaybe<StringFilter>;
  assignee?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  creator?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmergencyWhereUniqueInput = {
  AND?: InputMaybe<Array<EmergencyWhereInput>>;
  NOT?: InputMaybe<Array<EmergencyWhereInput>>;
  OR?: InputMaybe<Array<EmergencyWhereInput>>;
  assignedTo?: InputMaybe<StringFilter>;
  assignee?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringFilter>;
  creator?: InputMaybe<UserRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EnumRoleTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<RoleType>;
};

export type EnumRoleTypeFilter = {
  equals?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<RoleType>>;
  not?: InputMaybe<NestedEnumRoleTypeFilter>;
  notIn?: InputMaybe<Array<RoleType>>;
};

export type EnumRoleTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleTypeFilter>;
  _min?: InputMaybe<NestedEnumRoleTypeFilter>;
  equals?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<RoleType>>;
  not?: InputMaybe<NestedEnumRoleTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RoleType>>;
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Group = {
  __typename?: 'Group';
  _count: GroupCount;
  address: Scalars['String']['output'];
  alerts?: Maybe<Array<Alert>>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  assignee?: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<User>;
  id: Scalars['ID']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<Array<User>>;
};

export type GroupAvgAggregate = {
  __typename?: 'GroupAvgAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GroupAvgAggregateInput = {
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupAvgOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GroupCount = {
  __typename?: 'GroupCount';
  alerts: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};

export type GroupCountAggregate = {
  __typename?: 'GroupCountAggregate';
  _all: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  assignedTo: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdBy: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  latitude: Scalars['Int']['output'];
  longitude: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type GroupCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['Boolean']['input']>;
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  assignedTo?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupCreateInput = {
  address: Scalars['String']['input'];
  alerts?: InputMaybe<AlertCreateNestedManyWithoutGroupInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedGroupsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedGroupsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  users?: InputMaybe<UserCreateNestedManyWithoutGroupsInput>;
};

export type GroupCreateManyAssigneeInput = {
  address: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupCreateManyAssigneeInputEnvelope = {
  data: Array<GroupCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupCreateManyCreatorInput = {
  address: Scalars['String']['input'];
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupCreateManyCreatorInputEnvelope = {
  data: Array<GroupCreateManyCreatorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupCreateManyInput = {
  address: Scalars['String']['input'];
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<GroupCreateManyAssigneeInputEnvelope>;
};

export type GroupCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<GroupCreateManyCreatorInputEnvelope>;
};

export type GroupCreateNestedManyWithoutUsersInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutUsersInput>>;
};

export type GroupCreateNestedOneWithoutAlertsInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutAlertsInput>;
  create?: InputMaybe<GroupCreateWithoutAlertsInput>;
};

export type GroupCreateOrConnectWithoutAlertsInput = {
  create: GroupCreateWithoutAlertsInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateOrConnectWithoutAssigneeInput = {
  create: GroupCreateWithoutAssigneeInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateOrConnectWithoutCreatorInput = {
  create: GroupCreateWithoutCreatorInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateOrConnectWithoutUsersInput = {
  create: GroupCreateWithoutUsersInput;
  where: GroupWhereUniqueInput;
};

export type GroupCreateWithoutAlertsInput = {
  address: Scalars['String']['input'];
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedGroupsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedGroupsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  users?: InputMaybe<UserCreateNestedManyWithoutGroupsInput>;
};

export type GroupCreateWithoutAssigneeInput = {
  address: Scalars['String']['input'];
  alerts?: InputMaybe<AlertCreateNestedManyWithoutGroupInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedGroupsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  users?: InputMaybe<UserCreateNestedManyWithoutGroupsInput>;
};

export type GroupCreateWithoutCreatorInput = {
  address: Scalars['String']['input'];
  alerts?: InputMaybe<AlertCreateNestedManyWithoutGroupInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedGroupsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  users?: InputMaybe<UserCreateNestedManyWithoutGroupsInput>;
};

export type GroupCreateWithoutUsersInput = {
  address: Scalars['String']['input'];
  alerts?: InputMaybe<AlertCreateNestedManyWithoutGroupInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedGroupsInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedGroupsInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GroupGroupBy = {
  __typename?: 'GroupGroupBy';
  _avg?: Maybe<GroupAvgAggregate>;
  _count?: Maybe<GroupCountAggregate>;
  _max?: Maybe<GroupMaxAggregate>;
  _min?: Maybe<GroupMinAggregate>;
  _sum?: Maybe<GroupSumAggregate>;
  address: Scalars['String']['output'];
  assignedTo?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type GroupListRelationFilter = {
  every?: InputMaybe<GroupWhereInput>;
  none?: InputMaybe<GroupWhereInput>;
  some?: InputMaybe<GroupWhereInput>;
};

export type GroupMaxAggregate = {
  __typename?: 'GroupMaxAggregate';
  address?: Maybe<Scalars['String']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GroupMaxAggregateInput = {
  address?: InputMaybe<Scalars['Boolean']['input']>;
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  assignedTo?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupMinAggregate = {
  __typename?: 'GroupMinAggregate';
  address?: Maybe<Scalars['String']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GroupMinAggregateInput = {
  address?: InputMaybe<Scalars['Boolean']['input']>;
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  assignedTo?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupNullableRelationFilter = {
  is?: InputMaybe<GroupWhereInput>;
  isNot?: InputMaybe<GroupWhereInput>;
};

export type GroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GroupOrderByWithAggregationInput = {
  _avg?: InputMaybe<GroupAvgOrderByAggregateInput>;
  _count?: InputMaybe<GroupCountOrderByAggregateInput>;
  _max?: InputMaybe<GroupMaxOrderByAggregateInput>;
  _min?: InputMaybe<GroupMinOrderByAggregateInput>;
  _sum?: InputMaybe<GroupSumOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  assignedTo?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type GroupOrderByWithRelationInput = {
  address?: InputMaybe<SortOrder>;
  alerts?: InputMaybe<AlertOrderByRelationAggregateInput>;
  assignedTo?: InputMaybe<SortOrderInput>;
  assignee?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  creator?: InputMaybe<UserOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserOrderByRelationAggregateInput>;
};

export enum GroupScalarFieldEnum {
  Address = 'address',
  AssignedTo = 'assignedTo',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  Id = 'id',
  Latitude = 'latitude',
  Longitude = 'longitude',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type GroupScalarWhereInput = {
  AND?: InputMaybe<Array<GroupScalarWhereInput>>;
  NOT?: InputMaybe<Array<GroupScalarWhereInput>>;
  OR?: InputMaybe<Array<GroupScalarWhereInput>>;
  address?: InputMaybe<StringFilter>;
  assignedTo?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type GroupScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<GroupScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<GroupScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<GroupScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  assignedTo?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdBy?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  latitude?: InputMaybe<FloatWithAggregatesFilter>;
  longitude?: InputMaybe<FloatWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type GroupSumAggregate = {
  __typename?: 'GroupSumAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
};

export type GroupSumAggregateInput = {
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GroupSumOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
};

export type GroupUpdateInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutGroupNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedGroupsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedGroupsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutGroupsNestedInput>;
};

export type GroupUpdateManyMutationInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpdateManyWithWhereWithoutAssigneeInput = {
  data: GroupUpdateManyMutationInput;
  where: GroupScalarWhereInput;
};

export type GroupUpdateManyWithWhereWithoutCreatorInput = {
  data: GroupUpdateManyMutationInput;
  where: GroupScalarWhereInput;
};

export type GroupUpdateManyWithWhereWithoutUsersInput = {
  data: GroupUpdateManyMutationInput;
  where: GroupScalarWhereInput;
};

export type GroupUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<GroupCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<GroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupWhereUniqueInput>>;
  update?: InputMaybe<Array<GroupUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<GroupUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<GroupUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type GroupUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<GroupCreateManyCreatorInputEnvelope>;
  delete?: InputMaybe<Array<GroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupWhereUniqueInput>>;
  update?: InputMaybe<Array<GroupUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: InputMaybe<Array<GroupUpdateManyWithWhereWithoutCreatorInput>>;
  upsert?: InputMaybe<Array<GroupUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type GroupUpdateManyWithoutUsersNestedInput = {
  connect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<GroupCreateOrConnectWithoutUsersInput>>;
  create?: InputMaybe<Array<GroupCreateWithoutUsersInput>>;
  delete?: InputMaybe<Array<GroupWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<GroupScalarWhereInput>>;
  disconnect?: InputMaybe<Array<GroupWhereUniqueInput>>;
  set?: InputMaybe<Array<GroupWhereUniqueInput>>;
  update?: InputMaybe<Array<GroupUpdateWithWhereUniqueWithoutUsersInput>>;
  updateMany?: InputMaybe<Array<GroupUpdateManyWithWhereWithoutUsersInput>>;
  upsert?: InputMaybe<Array<GroupUpsertWithWhereUniqueWithoutUsersInput>>;
};

export type GroupUpdateOneWithoutAlertsNestedInput = {
  connect?: InputMaybe<GroupWhereUniqueInput>;
  connectOrCreate?: InputMaybe<GroupCreateOrConnectWithoutAlertsInput>;
  create?: InputMaybe<GroupCreateWithoutAlertsInput>;
  delete?: InputMaybe<GroupWhereInput>;
  disconnect?: InputMaybe<GroupWhereInput>;
  update?: InputMaybe<GroupUpdateToOneWithWhereWithoutAlertsInput>;
  upsert?: InputMaybe<GroupUpsertWithoutAlertsInput>;
};

export type GroupUpdateToOneWithWhereWithoutAlertsInput = {
  data: GroupUpdateWithoutAlertsInput;
  where?: InputMaybe<GroupWhereInput>;
};

export type GroupUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: GroupUpdateWithoutAssigneeInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateWithWhereUniqueWithoutCreatorInput = {
  data: GroupUpdateWithoutCreatorInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateWithWhereUniqueWithoutUsersInput = {
  data: GroupUpdateWithoutUsersInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpdateWithoutAlertsInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedGroupsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedGroupsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutGroupsNestedInput>;
};

export type GroupUpdateWithoutAssigneeInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutGroupNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedGroupsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutGroupsNestedInput>;
};

export type GroupUpdateWithoutCreatorInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutGroupNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedGroupsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserUpdateManyWithoutGroupsNestedInput>;
};

export type GroupUpdateWithoutUsersInput = {
  address?: InputMaybe<StringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutGroupNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedGroupsNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedGroupsNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<FloatFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type GroupUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: GroupCreateWithoutAssigneeInput;
  update: GroupUpdateWithoutAssigneeInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpsertWithWhereUniqueWithoutCreatorInput = {
  create: GroupCreateWithoutCreatorInput;
  update: GroupUpdateWithoutCreatorInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpsertWithWhereUniqueWithoutUsersInput = {
  create: GroupCreateWithoutUsersInput;
  update: GroupUpdateWithoutUsersInput;
  where: GroupWhereUniqueInput;
};

export type GroupUpsertWithoutAlertsInput = {
  create: GroupCreateWithoutAlertsInput;
  update: GroupUpdateWithoutAlertsInput;
  where?: InputMaybe<GroupWhereInput>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  address?: InputMaybe<StringFilter>;
  alerts?: InputMaybe<AlertListRelationFilter>;
  assignedTo?: InputMaybe<StringNullableFilter>;
  assignee?: InputMaybe<UserNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  creator?: InputMaybe<UserNullableRelationFilter>;
  id?: InputMaybe<StringFilter>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type GroupWhereUniqueInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  address?: InputMaybe<StringFilter>;
  alerts?: InputMaybe<AlertListRelationFilter>;
  assignedTo?: InputMaybe<StringNullableFilter>;
  assignee?: InputMaybe<UserNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  creator?: InputMaybe<UserNullableRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<FloatFilter>;
  longitude?: InputMaybe<FloatFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type LoginData = {
  __typename?: 'LoginData';
  error?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
  token?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  createAlert?: Maybe<Alert>;
  createChat?: Maybe<Chat>;
  createEmergency?: Maybe<Emergency>;
  createGroup?: Maybe<Group>;
  createManyAlert?: Maybe<AffectedRows>;
  createManyChat?: Maybe<AffectedRows>;
  createManyEmergency?: Maybe<AffectedRows>;
  createManyGroup?: Maybe<AffectedRows>;
  createManyUser?: Maybe<AffectedRows>;
  createUser?: Maybe<User>;
  deleteAlert?: Maybe<Alert>;
  deleteChat?: Maybe<Chat>;
  deleteEmergency?: Maybe<Emergency>;
  deleteGroup?: Maybe<Group>;
  deleteManyAlert?: Maybe<AffectedRows>;
  deleteManyChat?: Maybe<AffectedRows>;
  deleteManyEmergency?: Maybe<AffectedRows>;
  deleteManyGroup?: Maybe<AffectedRows>;
  deleteManyUser?: Maybe<AffectedRows>;
  deleteUser?: Maybe<User>;
  generateOtp: User;
  loginAdmin: LoginData;
  loginUser: LoginData;
  registerAdmin: User;
  registerUser: User;
  resendEmail: LoginData;
  updateAlert?: Maybe<Alert>;
  updateChat?: Maybe<Chat>;
  updateEmergency?: Maybe<Emergency>;
  updateGroup?: Maybe<Group>;
  updateManyAlert?: Maybe<AffectedRows>;
  updateManyChat?: Maybe<AffectedRows>;
  updateManyEmergency?: Maybe<AffectedRows>;
  updateManyGroup?: Maybe<AffectedRows>;
  updateManyUser?: Maybe<AffectedRows>;
  updateUser?: Maybe<User>;
  verifyEmail: LoginData;
  verifyOtp: User;
  verifyUserAccountOtp: User;
};


export type MutationChangePasswordArgs = {
  email: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type MutationCreateAlertArgs = {
  data: AlertCreateInput;
};


export type MutationCreateChatArgs = {
  data: ChatCreateInput;
};


export type MutationCreateEmergencyArgs = {
  data: EmergencyCreateInput;
};


export type MutationCreateGroupArgs = {
  data: GroupCreateInput;
};


export type MutationCreateManyAlertArgs = {
  data: Array<AlertCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyChatArgs = {
  data: Array<ChatCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyEmergencyArgs = {
  data: Array<EmergencyCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyGroupArgs = {
  data: Array<GroupCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAlertArgs = {
  where: AlertWhereUniqueInput;
};


export type MutationDeleteChatArgs = {
  where: ChatWhereUniqueInput;
};


export type MutationDeleteEmergencyArgs = {
  where: EmergencyWhereUniqueInput;
};


export type MutationDeleteGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type MutationDeleteManyAlertArgs = {
  where?: InputMaybe<AlertWhereInput>;
};


export type MutationDeleteManyChatArgs = {
  where?: InputMaybe<ChatWhereInput>;
};


export type MutationDeleteManyEmergencyArgs = {
  where?: InputMaybe<EmergencyWhereInput>;
};


export type MutationDeleteManyGroupArgs = {
  where?: InputMaybe<GroupWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationGenerateOtpArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationLoginAdminArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  deviceModel: Scalars['String']['input'];
  deviceName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  pushToken: Scalars['String']['input'];
};


export type MutationRegisterAdminArgs = {
  data: UserCreateInput;
};


export type MutationRegisterUserArgs = {
  data: UserCreateInput;
};


export type MutationResendEmailArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateAlertArgs = {
  data: AlertUpdateInput;
  where: AlertWhereUniqueInput;
};


export type MutationUpdateChatArgs = {
  data: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};


export type MutationUpdateEmergencyArgs = {
  data: EmergencyUpdateInput;
  where: EmergencyWhereUniqueInput;
};


export type MutationUpdateGroupArgs = {
  data: GroupUpdateInput;
  where: GroupWhereUniqueInput;
};


export type MutationUpdateManyAlertArgs = {
  data: AlertUpdateManyMutationInput;
  where?: InputMaybe<AlertWhereInput>;
};


export type MutationUpdateManyChatArgs = {
  data: ChatUpdateManyMutationInput;
  where?: InputMaybe<ChatWhereInput>;
};


export type MutationUpdateManyEmergencyArgs = {
  data: EmergencyUpdateManyMutationInput;
  where?: InputMaybe<EmergencyWhereInput>;
};


export type MutationUpdateManyGroupArgs = {
  data: GroupUpdateManyMutationInput;
  where?: InputMaybe<GroupWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationVerifyOtpArgs = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};


export type MutationVerifyUserAccountOtpArgs = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumRoleTypeFilter = {
  equals?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<RoleType>>;
  not?: InputMaybe<NestedEnumRoleTypeFilter>;
  notIn?: InputMaybe<Array<RoleType>>;
};

export type NestedEnumRoleTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleTypeFilter>;
  _min?: InputMaybe<NestedEnumRoleTypeFilter>;
  equals?: InputMaybe<RoleType>;
  in?: InputMaybe<Array<RoleType>>;
  not?: InputMaybe<NestedEnumRoleTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<RoleType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']['input']>;
  divide?: InputMaybe<Scalars['Float']['input']>;
  increment?: InputMaybe<Scalars['Float']['input']>;
  multiply?: InputMaybe<Scalars['Float']['input']>;
  set?: InputMaybe<Scalars['Float']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type PaginatedGroup = {
  __typename?: 'PaginatedGroup';
  results?: Maybe<Array<Group>>;
  totalPages: Scalars['Int']['output'];
};

export type PaginatedUser = {
  __typename?: 'PaginatedUser';
  results?: Maybe<Array<User>>;
  totalPages: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  aggregateAlert: AggregateAlert;
  aggregateChat: AggregateChat;
  aggregateEmergency: AggregateEmergency;
  aggregateGroup: AggregateGroup;
  aggregateUser: AggregateUser;
  findFirstAlert: Alert;
  findFirstChat: Chat;
  findFirstEmergency: Emergency;
  findFirstGroup: Group;
  findFirstUser: User;
  findUniqueAlert: Alert;
  findUniqueChat: Chat;
  findUniqueEmergency: Emergency;
  findUniqueGroup: Group;
  findUniqueUser: User;
  getCurrentUser: User;
  getSubAdminsOfSuperAdmin: PaginatedGroup;
  getUsersAndSubAdminsOfSuperAdmin: PaginatedGroup;
  getUsersOfSubAdmin: PaginatedGroup;
  groupByAlert: Array<AlertGroupBy>;
  groupByChat: Array<ChatGroupBy>;
  groupByEmergency: Array<EmergencyGroupBy>;
  groupByGroup: Array<GroupGroupBy>;
  groupByUser: Array<UserGroupBy>;
  listAlerts: Array<Alert>;
  listChats: Array<Chat>;
  listEmergencys: Array<Emergency>;
  listGroups: PaginatedGroup;
  listUsers: PaginatedUser;
};


export type QueryAggregateAlertArgs = {
  _avg?: InputMaybe<AlertAvgAggregateInput>;
  _count?: InputMaybe<AlertCountAggregateInput>;
  _max?: InputMaybe<AlertMaxAggregateInput>;
  _min?: InputMaybe<AlertMinAggregateInput>;
  _sum?: InputMaybe<AlertSumAggregateInput>;
  cursor?: InputMaybe<AlertWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AlertOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AlertWhereInput>;
};


export type QueryAggregateChatArgs = {
  _count?: InputMaybe<ChatCountAggregateInput>;
  _max?: InputMaybe<ChatMaxAggregateInput>;
  _min?: InputMaybe<ChatMinAggregateInput>;
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryAggregateEmergencyArgs = {
  _count?: InputMaybe<EmergencyCountAggregateInput>;
  _max?: InputMaybe<EmergencyMaxAggregateInput>;
  _min?: InputMaybe<EmergencyMinAggregateInput>;
  cursor?: InputMaybe<EmergencyWhereUniqueInput>;
  orderBy?: InputMaybe<Array<EmergencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmergencyWhereInput>;
};


export type QueryAggregateGroupArgs = {
  _avg?: InputMaybe<GroupAvgAggregateInput>;
  _count?: InputMaybe<GroupCountAggregateInput>;
  _max?: InputMaybe<GroupMaxAggregateInput>;
  _min?: InputMaybe<GroupMinAggregateInput>;
  _sum?: InputMaybe<GroupSumAggregateInput>;
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  orderBy?: InputMaybe<Array<GroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type QueryAggregateUserArgs = {
  _avg?: InputMaybe<UserAvgAggregateInput>;
  _count?: InputMaybe<UserCountAggregateInput>;
  _max?: InputMaybe<UserMaxAggregateInput>;
  _min?: InputMaybe<UserMinAggregateInput>;
  _sum?: InputMaybe<UserSumAggregateInput>;
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstAlertArgs = {
  cursor?: InputMaybe<AlertWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlertScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlertOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AlertWhereInput>;
};


export type QueryFindFirstChatArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindFirstEmergencyArgs = {
  cursor?: InputMaybe<EmergencyWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmergencyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmergencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmergencyWhereInput>;
};


export type QueryFindFirstGroupArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<GroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GroupOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindUniqueAlertArgs = {
  where: AlertWhereUniqueInput;
};


export type QueryFindUniqueChatArgs = {
  where: ChatWhereUniqueInput;
};


export type QueryFindUniqueEmergencyArgs = {
  where: EmergencyWhereUniqueInput;
};


export type QueryFindUniqueGroupArgs = {
  where: GroupWhereUniqueInput;
};


export type QueryFindUniqueUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetSubAdminsOfSuperAdminArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryGetUsersAndSubAdminsOfSuperAdminArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryGetUsersOfSubAdminArgs = {
  page?: Scalars['Int']['input'];
};


export type QueryGroupByAlertArgs = {
  _avg?: InputMaybe<AlertAvgAggregateInput>;
  _count?: InputMaybe<AlertCountAggregateInput>;
  _max?: InputMaybe<AlertMaxAggregateInput>;
  _min?: InputMaybe<AlertMinAggregateInput>;
  _sum?: InputMaybe<AlertSumAggregateInput>;
  by: Array<AlertScalarFieldEnum>;
  having?: InputMaybe<AlertScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AlertOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AlertWhereInput>;
};


export type QueryGroupByChatArgs = {
  _count?: InputMaybe<ChatCountAggregateInput>;
  _max?: InputMaybe<ChatMaxAggregateInput>;
  _min?: InputMaybe<ChatMinAggregateInput>;
  by: Array<ChatScalarFieldEnum>;
  having?: InputMaybe<ChatScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ChatOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryGroupByEmergencyArgs = {
  _count?: InputMaybe<EmergencyCountAggregateInput>;
  _max?: InputMaybe<EmergencyMaxAggregateInput>;
  _min?: InputMaybe<EmergencyMinAggregateInput>;
  by: Array<EmergencyScalarFieldEnum>;
  having?: InputMaybe<EmergencyScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<EmergencyOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmergencyWhereInput>;
};


export type QueryGroupByGroupArgs = {
  _avg?: InputMaybe<GroupAvgAggregateInput>;
  _count?: InputMaybe<GroupCountAggregateInput>;
  _max?: InputMaybe<GroupMaxAggregateInput>;
  _min?: InputMaybe<GroupMinAggregateInput>;
  _sum?: InputMaybe<GroupSumAggregateInput>;
  by: Array<GroupScalarFieldEnum>;
  having?: InputMaybe<GroupScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<GroupOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GroupWhereInput>;
};


export type QueryGroupByUserArgs = {
  _avg?: InputMaybe<UserAvgAggregateInput>;
  _count?: InputMaybe<UserCountAggregateInput>;
  _max?: InputMaybe<UserMaxAggregateInput>;
  _min?: InputMaybe<UserMinAggregateInput>;
  _sum?: InputMaybe<UserSumAggregateInput>;
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryListAlertsArgs = {
  cursor?: InputMaybe<AlertWhereUniqueInput>;
  distinct?: InputMaybe<Array<AlertScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AlertOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AlertWhereInput>;
};


export type QueryListChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryListEmergencysArgs = {
  cursor?: InputMaybe<EmergencyWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmergencyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmergencyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EmergencyWhereInput>;
};


export type QueryListGroupsArgs = {
  include?: InputMaybe<Scalars['Boolean']['input']>;
  page?: Scalars['Int']['input'];
};


export type QueryListUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  page?: Scalars['Int']['input'];
  query?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<RoleType>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RoleType {
  SubAdmin = 'SubAdmin',
  SuperAdmin = 'SuperAdmin',
  UltraSuperAdmin = 'UltraSuperAdmin',
  User = 'User'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  accountVerified: Scalars['Boolean']['output'];
  address?: Maybe<Scalars['String']['output']>;
  alerts?: Maybe<Array<Alert>>;
  assignedEmergencies?: Maybe<Array<Emergency>>;
  assignedGroups?: Maybe<Array<Group>>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  assignedUsers?: Maybe<Array<User>>;
  assignee?: Maybe<User>;
  chats?: Maybe<Array<Chat>>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAlerts?: Maybe<Array<Alert>>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  createdEmergencies?: Maybe<Array<Emergency>>;
  createdGroups?: Maybe<Array<Group>>;
  createdUsers?: Maybe<Array<User>>;
  creator?: Maybe<User>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceModel?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Group>>;
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nextOfKinContact?: Maybe<Scalars['String']['output']>;
  nextOfKinName?: Maybe<Scalars['String']['output']>;
  onBoarding: Scalars['Boolean']['output'];
  otpExpiration?: Maybe<Scalars['DateTime']['output']>;
  password: Scalars['String']['output'];
  profilePhoto?: Maybe<Scalars['String']['output']>;
  pushToken?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  role: RoleType;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  verificationOtp?: Maybe<Scalars['String']['output']>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
};

export type UserAvgAggregateInput = {
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  radius?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAvgOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  radius?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  alerts: Scalars['Int']['output'];
  assignedEmergencies: Scalars['Int']['output'];
  assignedGroups: Scalars['Int']['output'];
  assignedUsers: Scalars['Int']['output'];
  chats: Scalars['Int']['output'];
  createdAlerts: Scalars['Int']['output'];
  createdEmergencies: Scalars['Int']['output'];
  createdGroups: Scalars['Int']['output'];
  createdUsers: Scalars['Int']['output'];
  groups: Scalars['Int']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  accountVerified: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  assignedTo: Scalars['Int']['output'];
  companyName: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  createdBy: Scalars['Int']['output'];
  deviceId: Scalars['Int']['output'];
  deviceModel: Scalars['Int']['output'];
  deviceName: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  firstName: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['Int']['output'];
  latitude: Scalars['Int']['output'];
  longitude: Scalars['Int']['output'];
  nextOfKinContact: Scalars['Int']['output'];
  nextOfKinName: Scalars['Int']['output'];
  onBoarding: Scalars['Int']['output'];
  otpExpiration: Scalars['Int']['output'];
  password: Scalars['Int']['output'];
  profilePhoto: Scalars['Int']['output'];
  pushToken: Scalars['Int']['output'];
  radius: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  verificationOtp: Scalars['Int']['output'];
};

export type UserCountAggregateInput = {
  _all?: InputMaybe<Scalars['Boolean']['input']>;
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['Boolean']['input']>;
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  companyName?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  deviceId?: InputMaybe<Scalars['Boolean']['input']>;
  deviceModel?: InputMaybe<Scalars['Boolean']['input']>;
  deviceName?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['Boolean']['input']>;
  nextOfKinName?: InputMaybe<Scalars['Boolean']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  profilePhoto?: InputMaybe<Scalars['Boolean']['input']>;
  pushToken?: InputMaybe<Scalars['Boolean']['input']>;
  radius?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  verificationOtp?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCountOrderByAggregateInput = {
  accountVerified?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  assignedTo?: InputMaybe<SortOrder>;
  companyName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  deviceId?: InputMaybe<SortOrder>;
  deviceModel?: InputMaybe<SortOrder>;
  deviceName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  nextOfKinContact?: InputMaybe<SortOrder>;
  nextOfKinName?: InputMaybe<SortOrder>;
  onBoarding?: InputMaybe<SortOrder>;
  otpExpiration?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePhoto?: InputMaybe<SortOrder>;
  pushToken?: InputMaybe<SortOrder>;
  radius?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verificationOtp?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyAssigneeInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyAssigneeInputEnvelope = {
  data: Array<UserCreateManyAssigneeInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateManyCreatorInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyCreatorInputEnvelope = {
  data: Array<UserCreateManyCreatorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserCreateManyInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  assignedTo?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdBy?: InputMaybe<Scalars['String']['input']>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateNestedManyWithoutAlertsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAlertsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAlertsInput>>;
};

export type UserCreateNestedManyWithoutAssigneeInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<UserCreateManyAssigneeInputEnvelope>;
};

export type UserCreateNestedManyWithoutCreatorInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<UserCreateManyCreatorInputEnvelope>;
};

export type UserCreateNestedManyWithoutGroupsInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutGroupsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutGroupsInput>>;
};

export type UserCreateNestedOneWithoutAssignedEmergenciesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedEmergenciesInput>;
  create?: InputMaybe<UserCreateWithoutAssignedEmergenciesInput>;
};

export type UserCreateNestedOneWithoutAssignedGroupsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedGroupsInput>;
  create?: InputMaybe<UserCreateWithoutAssignedGroupsInput>;
};

export type UserCreateNestedOneWithoutAssignedUsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedUsersInput>;
  create?: InputMaybe<UserCreateWithoutAssignedUsersInput>;
};

export type UserCreateNestedOneWithoutChatsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<UserCreateWithoutChatsInput>;
};

export type UserCreateNestedOneWithoutCreatedAlertsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedAlertsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedAlertsInput>;
};

export type UserCreateNestedOneWithoutCreatedEmergenciesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedEmergenciesInput>;
  create?: InputMaybe<UserCreateWithoutCreatedEmergenciesInput>;
};

export type UserCreateNestedOneWithoutCreatedGroupsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedGroupsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedGroupsInput>;
};

export type UserCreateNestedOneWithoutCreatedUsersInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedUsersInput>;
  create?: InputMaybe<UserCreateWithoutCreatedUsersInput>;
};

export type UserCreateOrConnectWithoutAlertsInput = {
  create: UserCreateWithoutAlertsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAssignedEmergenciesInput = {
  create: UserCreateWithoutAssignedEmergenciesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAssignedGroupsInput = {
  create: UserCreateWithoutAssignedGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAssignedUsersInput = {
  create: UserCreateWithoutAssignedUsersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAssigneeInput = {
  create: UserCreateWithoutAssigneeInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChatsInput = {
  create: UserCreateWithoutChatsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedAlertsInput = {
  create: UserCreateWithoutCreatedAlertsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedEmergenciesInput = {
  create: UserCreateWithoutCreatedEmergenciesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedGroupsInput = {
  create: UserCreateWithoutCreatedGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatedUsersInput = {
  create: UserCreateWithoutCreatedUsersInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatorInput = {
  create: UserCreateWithoutCreatorInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutGroupsInput = {
  create: UserCreateWithoutGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAlertsInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutAssignedEmergenciesInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutAssignedGroupsInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutAssignedUsersInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutAssigneeInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutChatsInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCreatedAlertsInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCreatedEmergenciesInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCreatedGroupsInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCreatedUsersInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCreatorInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<GroupCreateNestedManyWithoutUsersInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutGroupsInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  alerts?: InputMaybe<AlertCreateNestedManyWithoutUsersInput>;
  assignedEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutAssigneeInput>;
  assignedGroups?: InputMaybe<GroupCreateNestedManyWithoutAssigneeInput>;
  assignedUsers?: InputMaybe<UserCreateNestedManyWithoutAssigneeInput>;
  assignee?: InputMaybe<UserCreateNestedOneWithoutAssignedUsersInput>;
  chats?: InputMaybe<ChatCreateNestedManyWithoutUserInput>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  createdAlerts?: InputMaybe<AlertCreateNestedManyWithoutCreatorInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  createdEmergencies?: InputMaybe<EmergencyCreateNestedManyWithoutCreatorInput>;
  createdGroups?: InputMaybe<GroupCreateNestedManyWithoutCreatorInput>;
  createdUsers?: InputMaybe<UserCreateNestedManyWithoutCreatorInput>;
  creator?: InputMaybe<UserCreateNestedOneWithoutCreatedUsersInput>;
  deviceId?: InputMaybe<Scalars['String']['input']>;
  deviceModel?: InputMaybe<Scalars['String']['input']>;
  deviceName?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['String']['input']>;
  nextOfKinName?: InputMaybe<Scalars['String']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['DateTime']['input']>;
  password: Scalars['String']['input'];
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  radius?: InputMaybe<Scalars['Float']['input']>;
  role: RoleType;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  verificationOtp?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  accountVerified: Scalars['Boolean']['output'];
  address?: Maybe<Scalars['String']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceModel?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nextOfKinContact?: Maybe<Scalars['String']['output']>;
  nextOfKinName?: Maybe<Scalars['String']['output']>;
  onBoarding: Scalars['Boolean']['output'];
  otpExpiration?: Maybe<Scalars['DateTime']['output']>;
  password: Scalars['String']['output'];
  profilePhoto?: Maybe<Scalars['String']['output']>;
  pushToken?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  role: RoleType;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  verificationOtp?: Maybe<Scalars['String']['output']>;
};

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  accountVerified?: Maybe<Scalars['Boolean']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceModel?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nextOfKinContact?: Maybe<Scalars['String']['output']>;
  nextOfKinName?: Maybe<Scalars['String']['output']>;
  onBoarding?: Maybe<Scalars['Boolean']['output']>;
  otpExpiration?: Maybe<Scalars['DateTime']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  profilePhoto?: Maybe<Scalars['String']['output']>;
  pushToken?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  role?: Maybe<RoleType>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verificationOtp?: Maybe<Scalars['String']['output']>;
};

export type UserMaxAggregateInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['Boolean']['input']>;
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  companyName?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  deviceId?: InputMaybe<Scalars['Boolean']['input']>;
  deviceModel?: InputMaybe<Scalars['Boolean']['input']>;
  deviceName?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['Boolean']['input']>;
  nextOfKinName?: InputMaybe<Scalars['Boolean']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  profilePhoto?: InputMaybe<Scalars['Boolean']['input']>;
  pushToken?: InputMaybe<Scalars['Boolean']['input']>;
  radius?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  verificationOtp?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMaxOrderByAggregateInput = {
  accountVerified?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  assignedTo?: InputMaybe<SortOrder>;
  companyName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  deviceId?: InputMaybe<SortOrder>;
  deviceModel?: InputMaybe<SortOrder>;
  deviceName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  nextOfKinContact?: InputMaybe<SortOrder>;
  nextOfKinName?: InputMaybe<SortOrder>;
  onBoarding?: InputMaybe<SortOrder>;
  otpExpiration?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePhoto?: InputMaybe<SortOrder>;
  pushToken?: InputMaybe<SortOrder>;
  radius?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verificationOtp?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  accountVerified?: Maybe<Scalars['Boolean']['output']>;
  address?: Maybe<Scalars['String']['output']>;
  assignedTo?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  deviceId?: Maybe<Scalars['String']['output']>;
  deviceModel?: Maybe<Scalars['String']['output']>;
  deviceName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  nextOfKinContact?: Maybe<Scalars['String']['output']>;
  nextOfKinName?: Maybe<Scalars['String']['output']>;
  onBoarding?: Maybe<Scalars['Boolean']['output']>;
  otpExpiration?: Maybe<Scalars['DateTime']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  profilePhoto?: Maybe<Scalars['String']['output']>;
  pushToken?: Maybe<Scalars['String']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
  role?: Maybe<RoleType>;
  token?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  verificationOtp?: Maybe<Scalars['String']['output']>;
};

export type UserMinAggregateInput = {
  accountVerified?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['Boolean']['input']>;
  assignedTo?: InputMaybe<Scalars['Boolean']['input']>;
  companyName?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Boolean']['input']>;
  createdBy?: InputMaybe<Scalars['Boolean']['input']>;
  deviceId?: InputMaybe<Scalars['Boolean']['input']>;
  deviceModel?: InputMaybe<Scalars['Boolean']['input']>;
  deviceName?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['Boolean']['input']>;
  firstName?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['Boolean']['input']>;
  lastName?: InputMaybe<Scalars['Boolean']['input']>;
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  nextOfKinContact?: InputMaybe<Scalars['Boolean']['input']>;
  nextOfKinName?: InputMaybe<Scalars['Boolean']['input']>;
  onBoarding?: InputMaybe<Scalars['Boolean']['input']>;
  otpExpiration?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  profilePhoto?: InputMaybe<Scalars['Boolean']['input']>;
  pushToken?: InputMaybe<Scalars['Boolean']['input']>;
  radius?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['Boolean']['input']>;
  token?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['Boolean']['input']>;
  verificationOtp?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserMinOrderByAggregateInput = {
  accountVerified?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  assignedTo?: InputMaybe<SortOrder>;
  companyName?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrder>;
  deviceId?: InputMaybe<SortOrder>;
  deviceModel?: InputMaybe<SortOrder>;
  deviceName?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  nextOfKinContact?: InputMaybe<SortOrder>;
  nextOfKinName?: InputMaybe<SortOrder>;
  onBoarding?: InputMaybe<SortOrder>;
  otpExpiration?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  profilePhoto?: InputMaybe<SortOrder>;
  pushToken?: InputMaybe<SortOrder>;
  radius?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verificationOtp?: InputMaybe<SortOrder>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  accountVerified?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrderInput>;
  assignedTo?: InputMaybe<SortOrderInput>;
  companyName?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  deviceId?: InputMaybe<SortOrderInput>;
  deviceModel?: InputMaybe<SortOrderInput>;
  deviceName?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrderInput>;
  latitude?: InputMaybe<SortOrderInput>;
  longitude?: InputMaybe<SortOrderInput>;
  nextOfKinContact?: InputMaybe<SortOrderInput>;
  nextOfKinName?: InputMaybe<SortOrderInput>;
  onBoarding?: InputMaybe<SortOrder>;
  otpExpiration?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrder>;
  profilePhoto?: InputMaybe<SortOrderInput>;
  pushToken?: InputMaybe<SortOrderInput>;
  radius?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  verificationOtp?: InputMaybe<SortOrderInput>;
};

export type UserOrderByWithRelationInput = {
  accountVerified?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrderInput>;
  alerts?: InputMaybe<AlertOrderByRelationAggregateInput>;
  assignedEmergencies?: InputMaybe<EmergencyOrderByRelationAggregateInput>;
  assignedGroups?: InputMaybe<GroupOrderByRelationAggregateInput>;
  assignedTo?: InputMaybe<SortOrderInput>;
  assignedUsers?: InputMaybe<UserOrderByRelationAggregateInput>;
  assignee?: InputMaybe<UserOrderByWithRelationInput>;
  chats?: InputMaybe<ChatOrderByRelationAggregateInput>;
  companyName?: InputMaybe<SortOrderInput>;
  createdAlerts?: InputMaybe<AlertOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdBy?: InputMaybe<SortOrderInput>;
  createdEmergencies?: InputMaybe<EmergencyOrderByRelationAggregateInput>;
  createdGroups?: InputMaybe<GroupOrderByRelationAggregateInput>;
  createdUsers?: InputMaybe<UserOrderByRelationAggregateInput>;
  creator?: InputMaybe<UserOrderByWithRelationInput>;
  deviceId?: InputMaybe<SortOrderInput>;
  deviceModel?: InputMaybe<SortOrderInput>;
  deviceName?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrderInput>;
  groups?: InputMaybe<GroupOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrderInput>;
  latitude?: InputMaybe<SortOrderInput>;
  longitude?: InputMaybe<SortOrderInput>;
  nextOfKinContact?: InputMaybe<SortOrderInput>;
  nextOfKinName?: InputMaybe<SortOrderInput>;
  onBoarding?: InputMaybe<SortOrder>;
  otpExpiration?: InputMaybe<SortOrderInput>;
  password?: InputMaybe<SortOrder>;
  profilePhoto?: InputMaybe<SortOrderInput>;
  pushToken?: InputMaybe<SortOrderInput>;
  radius?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  verificationOtp?: InputMaybe<SortOrderInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  AccountVerified = 'accountVerified',
  Address = 'address',
  AssignedTo = 'assignedTo',
  CompanyName = 'companyName',
  CreatedAt = 'createdAt',
  CreatedBy = 'createdBy',
  DeviceId = 'deviceId',
  DeviceModel = 'deviceModel',
  DeviceName = 'deviceName',
  Email = 'email',
  FirstName = 'firstName',
  Id = 'id',
  LastName = 'lastName',
  Latitude = 'latitude',
  Longitude = 'longitude',
  NextOfKinContact = 'nextOfKinContact',
  NextOfKinName = 'nextOfKinName',
  OnBoarding = 'onBoarding',
  OtpExpiration = 'otpExpiration',
  Password = 'password',
  ProfilePhoto = 'profilePhoto',
  PushToken = 'pushToken',
  Radius = 'radius',
  Role = 'role',
  Token = 'token',
  UpdatedAt = 'updatedAt',
  VerificationOtp = 'verificationOtp'
}

export type UserScalarWhereInput = {
  AND?: InputMaybe<Array<UserScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereInput>>;
  OR?: InputMaybe<Array<UserScalarWhereInput>>;
  accountVerified?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  assignedTo?: InputMaybe<StringNullableFilter>;
  companyName?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  deviceId?: InputMaybe<StringNullableFilter>;
  deviceModel?: InputMaybe<StringNullableFilter>;
  deviceName?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  nextOfKinContact?: InputMaybe<StringNullableFilter>;
  nextOfKinName?: InputMaybe<StringNullableFilter>;
  onBoarding?: InputMaybe<BoolFilter>;
  otpExpiration?: InputMaybe<DateTimeNullableFilter>;
  password?: InputMaybe<StringFilter>;
  profilePhoto?: InputMaybe<StringNullableFilter>;
  pushToken?: InputMaybe<StringNullableFilter>;
  radius?: InputMaybe<FloatNullableFilter>;
  role?: InputMaybe<EnumRoleTypeFilter>;
  token?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verificationOtp?: InputMaybe<StringNullableFilter>;
};

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  accountVerified?: InputMaybe<BoolWithAggregatesFilter>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  assignedTo?: InputMaybe<StringNullableWithAggregatesFilter>;
  companyName?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  createdBy?: InputMaybe<StringNullableWithAggregatesFilter>;
  deviceId?: InputMaybe<StringNullableWithAggregatesFilter>;
  deviceModel?: InputMaybe<StringNullableWithAggregatesFilter>;
  deviceName?: InputMaybe<StringNullableWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringNullableWithAggregatesFilter>;
  latitude?: InputMaybe<FloatNullableWithAggregatesFilter>;
  longitude?: InputMaybe<FloatNullableWithAggregatesFilter>;
  nextOfKinContact?: InputMaybe<StringNullableWithAggregatesFilter>;
  nextOfKinName?: InputMaybe<StringNullableWithAggregatesFilter>;
  onBoarding?: InputMaybe<BoolWithAggregatesFilter>;
  otpExpiration?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  profilePhoto?: InputMaybe<StringNullableWithAggregatesFilter>;
  pushToken?: InputMaybe<StringNullableWithAggregatesFilter>;
  radius?: InputMaybe<FloatNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleTypeWithAggregatesFilter>;
  token?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  verificationOtp?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  radius?: Maybe<Scalars['Float']['output']>;
};

export type UserSumAggregateInput = {
  latitude?: InputMaybe<Scalars['Boolean']['input']>;
  longitude?: InputMaybe<Scalars['Boolean']['input']>;
  radius?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserSumOrderByAggregateInput = {
  latitude?: InputMaybe<SortOrder>;
  longitude?: InputMaybe<SortOrder>;
  radius?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyWithWhereWithoutAlertsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutAssigneeInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutCreatorInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithWhereWithoutGroupsInput = {
  data: UserUpdateManyMutationInput;
  where: UserScalarWhereInput;
};

export type UserUpdateManyWithoutAlertsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAlertsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAlertsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutAlertsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutAlertsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutAlertsInput>>;
};

export type UserUpdateManyWithoutAssigneeNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutAssigneeInput>>;
  create?: InputMaybe<Array<UserCreateWithoutAssigneeInput>>;
  createMany?: InputMaybe<UserCreateManyAssigneeInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type UserUpdateManyWithoutCreatorNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutCreatorInput>>;
  create?: InputMaybe<Array<UserCreateWithoutCreatorInput>>;
  createMany?: InputMaybe<UserCreateManyCreatorInputEnvelope>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutCreatorInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type UserUpdateManyWithoutGroupsNestedInput = {
  connect?: InputMaybe<Array<UserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserCreateOrConnectWithoutGroupsInput>>;
  create?: InputMaybe<Array<UserCreateWithoutGroupsInput>>;
  delete?: InputMaybe<Array<UserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>;
  set?: InputMaybe<Array<UserWhereUniqueInput>>;
  update?: InputMaybe<Array<UserUpdateWithWhereUniqueWithoutGroupsInput>>;
  updateMany?: InputMaybe<Array<UserUpdateManyWithWhereWithoutGroupsInput>>;
  upsert?: InputMaybe<Array<UserUpsertWithWhereUniqueWithoutGroupsInput>>;
};

export type UserUpdateOneRequiredWithoutAssignedEmergenciesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedEmergenciesInput>;
  create?: InputMaybe<UserCreateWithoutAssignedEmergenciesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAssignedEmergenciesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAssignedEmergenciesInput>;
};

export type UserUpdateOneRequiredWithoutChatsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<UserCreateWithoutChatsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChatsInput>;
  upsert?: InputMaybe<UserUpsertWithoutChatsInput>;
};

export type UserUpdateOneRequiredWithoutCreatedAlertsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedAlertsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedAlertsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedAlertsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedAlertsInput>;
};

export type UserUpdateOneRequiredWithoutCreatedEmergenciesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedEmergenciesInput>;
  create?: InputMaybe<UserCreateWithoutCreatedEmergenciesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedEmergenciesInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedEmergenciesInput>;
};

export type UserUpdateOneWithoutAssignedGroupsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedGroupsInput>;
  create?: InputMaybe<UserCreateWithoutAssignedGroupsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAssignedGroupsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAssignedGroupsInput>;
};

export type UserUpdateOneWithoutAssignedUsersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssignedUsersInput>;
  create?: InputMaybe<UserCreateWithoutAssignedUsersInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAssignedUsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutAssignedUsersInput>;
};

export type UserUpdateOneWithoutCreatedGroupsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedGroupsInput>;
  create?: InputMaybe<UserCreateWithoutCreatedGroupsInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedGroupsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedGroupsInput>;
};

export type UserUpdateOneWithoutCreatedUsersNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCreatedUsersInput>;
  create?: InputMaybe<UserCreateWithoutCreatedUsersInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCreatedUsersInput>;
  upsert?: InputMaybe<UserUpsertWithoutCreatedUsersInput>;
};

export type UserUpdateToOneWithWhereWithoutAssignedEmergenciesInput = {
  data: UserUpdateWithoutAssignedEmergenciesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAssignedGroupsInput = {
  data: UserUpdateWithoutAssignedGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAssignedUsersInput = {
  data: UserUpdateWithoutAssignedUsersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChatsInput = {
  data: UserUpdateWithoutChatsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedAlertsInput = {
  data: UserUpdateWithoutCreatedAlertsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedEmergenciesInput = {
  data: UserUpdateWithoutCreatedEmergenciesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedGroupsInput = {
  data: UserUpdateWithoutCreatedGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
  data: UserUpdateWithoutCreatedUsersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithWhereUniqueWithoutAlertsInput = {
  data: UserUpdateWithoutAlertsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: UserUpdateWithoutAssigneeInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutCreatorInput = {
  data: UserUpdateWithoutCreatorInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithWhereUniqueWithoutGroupsInput = {
  data: UserUpdateWithoutGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateWithoutAlertsInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAssignedEmergenciesInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAssignedGroupsInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAssignedUsersInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAssigneeInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChatsInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedAlertsInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedEmergenciesInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedGroupsInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatedUsersInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatorInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  groups?: InputMaybe<GroupUpdateManyWithoutUsersNestedInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutGroupsInput = {
  accountVerified?: InputMaybe<BoolFieldUpdateOperationsInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  alerts?: InputMaybe<AlertUpdateManyWithoutUsersNestedInput>;
  assignedEmergencies?: InputMaybe<EmergencyUpdateManyWithoutAssigneeNestedInput>;
  assignedGroups?: InputMaybe<GroupUpdateManyWithoutAssigneeNestedInput>;
  assignedUsers?: InputMaybe<UserUpdateManyWithoutAssigneeNestedInput>;
  assignee?: InputMaybe<UserUpdateOneWithoutAssignedUsersNestedInput>;
  chats?: InputMaybe<ChatUpdateManyWithoutUserNestedInput>;
  companyName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAlerts?: InputMaybe<AlertUpdateManyWithoutCreatorNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  createdEmergencies?: InputMaybe<EmergencyUpdateManyWithoutCreatorNestedInput>;
  createdGroups?: InputMaybe<GroupUpdateManyWithoutCreatorNestedInput>;
  createdUsers?: InputMaybe<UserUpdateManyWithoutCreatorNestedInput>;
  creator?: InputMaybe<UserUpdateOneWithoutCreatedUsersNestedInput>;
  deviceId?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceModel?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  deviceName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  firstName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  latitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  longitude?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  nextOfKinContact?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  nextOfKinName?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  onBoarding?: InputMaybe<BoolFieldUpdateOperationsInput>;
  otpExpiration?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  profilePhoto?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pushToken?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  radius?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleTypeFieldUpdateOperationsInput>;
  token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  verificationOtp?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithWhereUniqueWithoutAlertsInput = {
  create: UserCreateWithoutAlertsInput;
  update: UserUpdateWithoutAlertsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: UserCreateWithoutAssigneeInput;
  update: UserUpdateWithoutAssigneeInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutCreatorInput = {
  create: UserCreateWithoutCreatorInput;
  update: UserUpdateWithoutCreatorInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithWhereUniqueWithoutGroupsInput = {
  create: UserCreateWithoutGroupsInput;
  update: UserUpdateWithoutGroupsInput;
  where: UserWhereUniqueInput;
};

export type UserUpsertWithoutAssignedEmergenciesInput = {
  create: UserCreateWithoutAssignedEmergenciesInput;
  update: UserUpdateWithoutAssignedEmergenciesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAssignedGroupsInput = {
  create: UserCreateWithoutAssignedGroupsInput;
  update: UserUpdateWithoutAssignedGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAssignedUsersInput = {
  create: UserCreateWithoutAssignedUsersInput;
  update: UserUpdateWithoutAssignedUsersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChatsInput = {
  create: UserCreateWithoutChatsInput;
  update: UserUpdateWithoutChatsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedAlertsInput = {
  create: UserCreateWithoutCreatedAlertsInput;
  update: UserUpdateWithoutCreatedAlertsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedEmergenciesInput = {
  create: UserCreateWithoutCreatedEmergenciesInput;
  update: UserUpdateWithoutCreatedEmergenciesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedGroupsInput = {
  create: UserCreateWithoutCreatedGroupsInput;
  update: UserUpdateWithoutCreatedGroupsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCreatedUsersInput = {
  create: UserCreateWithoutCreatedUsersInput;
  update: UserUpdateWithoutCreatedUsersInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accountVerified?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  alerts?: InputMaybe<AlertListRelationFilter>;
  assignedEmergencies?: InputMaybe<EmergencyListRelationFilter>;
  assignedGroups?: InputMaybe<GroupListRelationFilter>;
  assignedTo?: InputMaybe<StringNullableFilter>;
  assignedUsers?: InputMaybe<UserListRelationFilter>;
  assignee?: InputMaybe<UserNullableRelationFilter>;
  chats?: InputMaybe<ChatListRelationFilter>;
  companyName?: InputMaybe<StringNullableFilter>;
  createdAlerts?: InputMaybe<AlertListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  createdEmergencies?: InputMaybe<EmergencyListRelationFilter>;
  createdGroups?: InputMaybe<GroupListRelationFilter>;
  createdUsers?: InputMaybe<UserListRelationFilter>;
  creator?: InputMaybe<UserNullableRelationFilter>;
  deviceId?: InputMaybe<StringNullableFilter>;
  deviceModel?: InputMaybe<StringNullableFilter>;
  deviceName?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringNullableFilter>;
  groups?: InputMaybe<GroupListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringNullableFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  nextOfKinContact?: InputMaybe<StringNullableFilter>;
  nextOfKinName?: InputMaybe<StringNullableFilter>;
  onBoarding?: InputMaybe<BoolFilter>;
  otpExpiration?: InputMaybe<DateTimeNullableFilter>;
  password?: InputMaybe<StringFilter>;
  profilePhoto?: InputMaybe<StringNullableFilter>;
  pushToken?: InputMaybe<StringNullableFilter>;
  radius?: InputMaybe<FloatNullableFilter>;
  role?: InputMaybe<EnumRoleTypeFilter>;
  token?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verificationOtp?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accountVerified?: InputMaybe<BoolFilter>;
  address?: InputMaybe<StringNullableFilter>;
  alerts?: InputMaybe<AlertListRelationFilter>;
  assignedEmergencies?: InputMaybe<EmergencyListRelationFilter>;
  assignedGroups?: InputMaybe<GroupListRelationFilter>;
  assignedTo?: InputMaybe<StringNullableFilter>;
  assignedUsers?: InputMaybe<UserListRelationFilter>;
  assignee?: InputMaybe<UserNullableRelationFilter>;
  chats?: InputMaybe<ChatListRelationFilter>;
  companyName?: InputMaybe<StringNullableFilter>;
  createdAlerts?: InputMaybe<AlertListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdBy?: InputMaybe<StringNullableFilter>;
  createdEmergencies?: InputMaybe<EmergencyListRelationFilter>;
  createdGroups?: InputMaybe<GroupListRelationFilter>;
  createdUsers?: InputMaybe<UserListRelationFilter>;
  creator?: InputMaybe<UserNullableRelationFilter>;
  deviceId?: InputMaybe<StringNullableFilter>;
  deviceModel?: InputMaybe<StringNullableFilter>;
  deviceName?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<StringNullableFilter>;
  groups?: InputMaybe<GroupListRelationFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<StringNullableFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  nextOfKinContact?: InputMaybe<StringNullableFilter>;
  nextOfKinName?: InputMaybe<StringNullableFilter>;
  onBoarding?: InputMaybe<BoolFilter>;
  otpExpiration?: InputMaybe<DateTimeNullableFilter>;
  password?: InputMaybe<StringFilter>;
  profilePhoto?: InputMaybe<StringNullableFilter>;
  pushToken?: InputMaybe<StringNullableFilter>;
  radius?: InputMaybe<FloatNullableFilter>;
  role?: InputMaybe<EnumRoleTypeFilter>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verificationOtp?: InputMaybe<StringNullableFilter>;
};

export type LoginUserMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  deviceName: Scalars['String']['input'];
  deviceModel: Scalars['String']['input'];
  expoPushToken: Scalars['String']['input'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'LoginData', token?: string | null } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'User', firstName?: string | null, lastName?: string | null, id: string, token?: string | null, assignedTo?: string | null, email: string } };

export type VerifyUserAccountOtpMutationVariables = Exact<{
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
}>;


export type VerifyUserAccountOtpMutation = { __typename?: 'Mutation', verifyUserAccountOtp: { __typename?: 'User', email: string, id: string } };

export type GenerateOtpMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;


export type GenerateOtpMutation = { __typename?: 'Mutation', generateOtp: { __typename?: 'User', email: string } };

export type UpdateUserMutationVariables = Exact<{
  where: UserWhereUniqueInput;
  data: UserUpdateInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, profilePhoto?: string | null } | null };

export type CreateAlertMutationVariables = Exact<{
  data: AlertCreateInput;
}>;


export type CreateAlertMutation = { __typename?: 'Mutation', createAlert?: { __typename?: 'Alert', id: string, emergency: string, latitude: number, longitude: number } | null };

export type GetUserBasicInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserBasicInfoQuery = { __typename?: 'Query', getCurrentUser: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, profilePhoto?: string | null, nextOfKinName?: string | null, nextOfKinContact?: string | null } };

export type GetUserEmailQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserEmailQuery = { __typename?: 'Query', getCurrentUser: { __typename?: 'User', email: string, id: string } };

export type GetUserFullInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserFullInfoQuery = { __typename?: 'Query', getCurrentUser: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, email: string } };


export const LoginUserDocument = gql`
    mutation loginUser($email: String!, $password: String!, $deviceName: String!, $deviceModel: String!, $expoPushToken: String!) {
  loginUser(
    email: $email
    password: $password
    deviceName: $deviceName
    deviceModel: $deviceModel
    pushToken: $expoPushToken
  ) {
    token
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      deviceName: // value for 'deviceName'
 *      deviceModel: // value for 'deviceModel'
 *      expoPushToken: // value for 'expoPushToken'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: UserCreateInput!) {
  registerUser(data: $data) {
    firstName
    lastName
    id
    token
    assignedTo
    email
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const VerifyUserAccountOtpDocument = gql`
    mutation VerifyUserAccountOtp($email: String!, $otp: String!) {
  verifyUserAccountOtp(email: $email, otp: $otp) {
    email
    id
  }
}
    `;
export type VerifyUserAccountOtpMutationFn = Apollo.MutationFunction<VerifyUserAccountOtpMutation, VerifyUserAccountOtpMutationVariables>;

/**
 * __useVerifyUserAccountOtpMutation__
 *
 * To run a mutation, you first call `useVerifyUserAccountOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyUserAccountOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyUserAccountOtpMutation, { data, loading, error }] = useVerifyUserAccountOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      otp: // value for 'otp'
 *   },
 * });
 */
export function useVerifyUserAccountOtpMutation(baseOptions?: Apollo.MutationHookOptions<VerifyUserAccountOtpMutation, VerifyUserAccountOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyUserAccountOtpMutation, VerifyUserAccountOtpMutationVariables>(VerifyUserAccountOtpDocument, options);
      }
export type VerifyUserAccountOtpMutationHookResult = ReturnType<typeof useVerifyUserAccountOtpMutation>;
export type VerifyUserAccountOtpMutationResult = Apollo.MutationResult<VerifyUserAccountOtpMutation>;
export type VerifyUserAccountOtpMutationOptions = Apollo.BaseMutationOptions<VerifyUserAccountOtpMutation, VerifyUserAccountOtpMutationVariables>;
export const GenerateOtpDocument = gql`
    mutation GenerateOtp($email: String!) {
  generateOtp(where: {email: $email}, data: {}) {
    email
  }
}
    `;
export type GenerateOtpMutationFn = Apollo.MutationFunction<GenerateOtpMutation, GenerateOtpMutationVariables>;

/**
 * __useGenerateOtpMutation__
 *
 * To run a mutation, you first call `useGenerateOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateOtpMutation, { data, loading, error }] = useGenerateOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGenerateOtpMutation(baseOptions?: Apollo.MutationHookOptions<GenerateOtpMutation, GenerateOtpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateOtpMutation, GenerateOtpMutationVariables>(GenerateOtpDocument, options);
      }
export type GenerateOtpMutationHookResult = ReturnType<typeof useGenerateOtpMutation>;
export type GenerateOtpMutationResult = Apollo.MutationResult<GenerateOtpMutation>;
export type GenerateOtpMutationOptions = Apollo.BaseMutationOptions<GenerateOtpMutation, GenerateOtpMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
  updateUser(where: $where, data: $data) {
    id
    firstName
    lastName
    profilePhoto
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      where: // value for 'where'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const CreateAlertDocument = gql`
    mutation CreateAlert($data: AlertCreateInput!) {
  createAlert(data: $data) {
    id
    emergency
    latitude
    longitude
  }
}
    `;
export type CreateAlertMutationFn = Apollo.MutationFunction<CreateAlertMutation, CreateAlertMutationVariables>;

/**
 * __useCreateAlertMutation__
 *
 * To run a mutation, you first call `useCreateAlertMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAlertMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAlertMutation, { data, loading, error }] = useCreateAlertMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAlertMutation(baseOptions?: Apollo.MutationHookOptions<CreateAlertMutation, CreateAlertMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAlertMutation, CreateAlertMutationVariables>(CreateAlertDocument, options);
      }
export type CreateAlertMutationHookResult = ReturnType<typeof useCreateAlertMutation>;
export type CreateAlertMutationResult = Apollo.MutationResult<CreateAlertMutation>;
export type CreateAlertMutationOptions = Apollo.BaseMutationOptions<CreateAlertMutation, CreateAlertMutationVariables>;
export const GetUserBasicInfoDocument = gql`
    query GetUserBasicInfo {
  getCurrentUser {
    id
    firstName
    lastName
    profilePhoto
    nextOfKinName
    nextOfKinContact
  }
}
    `;

/**
 * __useGetUserBasicInfoQuery__
 *
 * To run a query within a React component, call `useGetUserBasicInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBasicInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBasicInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserBasicInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>(GetUserBasicInfoDocument, options);
      }
export function useGetUserBasicInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>(GetUserBasicInfoDocument, options);
        }
export function useGetUserBasicInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>(GetUserBasicInfoDocument, options);
        }
export type GetUserBasicInfoQueryHookResult = ReturnType<typeof useGetUserBasicInfoQuery>;
export type GetUserBasicInfoLazyQueryHookResult = ReturnType<typeof useGetUserBasicInfoLazyQuery>;
export type GetUserBasicInfoSuspenseQueryHookResult = ReturnType<typeof useGetUserBasicInfoSuspenseQuery>;
export type GetUserBasicInfoQueryResult = Apollo.QueryResult<GetUserBasicInfoQuery, GetUserBasicInfoQueryVariables>;
export const GetUserEmailDocument = gql`
    query GetUserEmail {
  getCurrentUser {
    email
    id
  }
}
    `;

/**
 * __useGetUserEmailQuery__
 *
 * To run a query within a React component, call `useGetUserEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserEmailQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserEmailQuery(baseOptions?: Apollo.QueryHookOptions<GetUserEmailQuery, GetUserEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserEmailQuery, GetUserEmailQueryVariables>(GetUserEmailDocument, options);
      }
export function useGetUserEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserEmailQuery, GetUserEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserEmailQuery, GetUserEmailQueryVariables>(GetUserEmailDocument, options);
        }
export function useGetUserEmailSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserEmailQuery, GetUserEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserEmailQuery, GetUserEmailQueryVariables>(GetUserEmailDocument, options);
        }
export type GetUserEmailQueryHookResult = ReturnType<typeof useGetUserEmailQuery>;
export type GetUserEmailLazyQueryHookResult = ReturnType<typeof useGetUserEmailLazyQuery>;
export type GetUserEmailSuspenseQueryHookResult = ReturnType<typeof useGetUserEmailSuspenseQuery>;
export type GetUserEmailQueryResult = Apollo.QueryResult<GetUserEmailQuery, GetUserEmailQueryVariables>;
export const GetUserFullInfoDocument = gql`
    query GetUserFullInfo {
  getCurrentUser {
    id
    firstName
    lastName
    email
  }
}
    `;

/**
 * __useGetUserFullInfoQuery__
 *
 * To run a query within a React component, call `useGetUserFullInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserFullInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserFullInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserFullInfoQuery(baseOptions?: Apollo.QueryHookOptions<GetUserFullInfoQuery, GetUserFullInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserFullInfoQuery, GetUserFullInfoQueryVariables>(GetUserFullInfoDocument, options);
      }
export function useGetUserFullInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserFullInfoQuery, GetUserFullInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserFullInfoQuery, GetUserFullInfoQueryVariables>(GetUserFullInfoDocument, options);
        }
export function useGetUserFullInfoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserFullInfoQuery, GetUserFullInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserFullInfoQuery, GetUserFullInfoQueryVariables>(GetUserFullInfoDocument, options);
        }
export type GetUserFullInfoQueryHookResult = ReturnType<typeof useGetUserFullInfoQuery>;
export type GetUserFullInfoLazyQueryHookResult = ReturnType<typeof useGetUserFullInfoLazyQuery>;
export type GetUserFullInfoSuspenseQueryHookResult = ReturnType<typeof useGetUserFullInfoSuspenseQuery>;
export type GetUserFullInfoQueryResult = Apollo.QueryResult<GetUserFullInfoQuery, GetUserFullInfoQueryVariables>;